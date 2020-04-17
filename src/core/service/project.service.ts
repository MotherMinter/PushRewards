import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Account, Client, Company, Project } from '../entity';
import { Repository } from 'typeorm';
import { AccountDto, ClientDto, CompanyDto, ProjectDto } from '../dto';
import { UtilService } from './util.service';
import { WarehouseService } from './warehouse.service';

const APIKEY_LENGTH = 32;

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    private readonly warehouseService: WarehouseService,
    private readonly utilService: UtilService,
  ) {
  }

  async create(client: Client, projectData: ProjectDto): Promise<Project> {
    try {
      const project = new Project();
      project.apiKey = this.utilService.generateUniqWalletId(APIKEY_LENGTH);
      project.client = client;
      project.warehouseWallet = await this.warehouseService.create();
      project.uid = uuidv4();
      project.status = 100;

      await this.projectRepository.save(project);

      return project;
    } catch (error) {
      global.console.error({ error, data: projectData });
      throw new HttpException('Fail to create new project', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async get(client: Client, uid: string): Promise<Project> {
    try {
      return await this.projectRepository.findOneOrFail({ uid, client });
    } catch (error) {
      global.console.error('fail to find project', uid);
    }
    return null;
  }

  async getByApi(apiKey: string): Promise<Project> {
    try {
      return await this.projectRepository.findOneOrFail({ apiKey });
    } catch (error) {
      global.console.error('fail to find project', apiKey);
    }
    return null;
  }
}
