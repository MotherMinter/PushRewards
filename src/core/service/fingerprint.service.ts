import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Account, Client, Company, FingerPrint, Project, User } from '../entity';
import { Repository } from 'typeorm';
import { AccountDto, ClientDto, CompanyDto, ProjectDto } from '../dto';
import { UtilService } from './util.service';
import { WarehouseService } from './warehouse.service';
import { UserService } from './user.service';

const FP_LENGTH = 32;

@Injectable()
export class FingerprintService {
  constructor(
    @InjectRepository(FingerPrint)
    private readonly fingerPrintRepository: Repository<FingerPrint>,
    private readonly userService: UserService,
  ) {
  }

  async create(fp: string): Promise<FingerPrint> {
    if (fp && fp.length === FP_LENGTH) {
      const user = await this.userService.create();

      const fingerPrint = new FingerPrint();
      fingerPrint.fingerprint = fp;
      fingerPrint.user = user;
      await this.fingerPrintRepository.save(fingerPrint);

      return fingerPrint;
    }
    return null;
  }

  async get(fp: string, isCreate: boolean = true): Promise<FingerPrint> {
    if (fp && fp.length === FP_LENGTH) {
      try {
        return await this.fingerPrintRepository.findOneOrFail({ fingerprint: fp });
      } catch (error) {
        if (isCreate) {
          return this.create(fp);
        }
      }
    }
    return null;
  }
}
