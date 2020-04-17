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
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    private readonly warehouseService: WarehouseService,
    private readonly utilService: UtilService,
  ) {
  }

  async create(project: Project, companyData: CompanyDto): Promise<Company> {
    try {
      const company = new Company();
      company.client = project.client;
      company.uid = uuidv4();
      company.warehouseWallet = await this.warehouseService.create();

      await this.companyRepository.save(company);

      return company;
    } catch (error) {
      global.console.error({ error, data: companyData });
      throw new HttpException('Fail to create new project', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async get(client: Client, uid: string): Promise<Company> {
    try {
      return await this.companyRepository.findOneOrFail({ uid, client });
    } catch (error) {
      global.console.error('fail to find company', uid);
    }
    return null;
  }

  async getByUid(uid: string): Promise<Company> {
    try {
      return await this.companyRepository.findOneOrFail({ uid });
    } catch (error) {
      global.console.error('fail to find company', uid);
    }
    return null;
  }
}
