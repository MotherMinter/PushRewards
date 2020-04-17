import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account, Action, Client, Company, FingerPrint } from '../entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { AccountDto, ClientDto, CompanyDto, FpActionDto } from '../dto';
import { UtilService } from './util.service';
import { ActionStatus } from '../enum';

@Injectable()
export class ActionService {
  constructor(
    @InjectRepository(Action)
    private readonly actionRepository: Repository<Action>,
    private readonly utilService: UtilService,
  ) {
  }

  async add(company: Company, fingerPrint: FingerPrint, params): Promise<Action> {
    try {
      const action = new Action();
      action.setParams(params);
      action.uid = uuidv4();
      action.user = fingerPrint.user;
      action.company = company;
      action.status = company.status;
      action.client = company?.project?.client;

      await this.actionRepository.save(action);

      return action;
    } catch (error) {
      global.console.error({ error, data: company.uid, params });
      throw new HttpException('Fail to create new client', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getList(company: Company): Promise<Action[]> {
    return this.actionRepository.find({
      where: { company },
    });
  }

  async getListByClient(client: Client): Promise<Action[]> {
    return this.actionRepository.find({
      where: { client },
    });
  }

  async applyActionById(client: Client, uid: string): Promise<Action> {
    const action = await this.actionRepository.findOne({uid, client});
    if (!action) {
      return null;
    }
    if (action.status !== ActionStatus.NEW) {
      return null;
    }

    action.status = ActionStatus.ACCEPTED;
    // todo: send transaction with reward's
    await this.actionRepository.save(action);
    return action;
  }

  async declineActionById(client: Client, uid: string): Promise<Action> {
    const action = await this.actionRepository.findOne({uid, client});
    if (!action) {
      return null;
    }
    if (action.status !== ActionStatus.NEW) {
      return null;
    }

    action.status = ActionStatus.DECLINE;
    await this.actionRepository.save(action);
    return action;
  }
}
