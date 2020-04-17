import {
  Req,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Query,
  Param,
  Controller,
  ClassSerializerInterceptor,
  UseInterceptors,
  HttpException, HttpStatus, HttpCode, UploadedFiles, UploadedFile,
} from '@nestjs/common';
import { Request, response } from 'express';
import { ApiBearerAuth, ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import axios from 'axios';
import { diskStorage } from 'multer';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

import { Company, Wallet, Account, Client, Action } from './entity';
import { AccountDto, ClientDto, CompanyDto, WalletDto, ProjectDto, FpDto, FpActionDto } from './dto';
import {
  AccountService, ActionService,
  CompanyService, FingerprintService,
  PartnerService,
  WalletService, WarehouseService,
} from './service';
import Decimal from 'decimal.js';
import { min } from 'rxjs/operators';
import { ClientService } from './service/client.service';
import { ProjectService } from './service/project.service';

@ApiTags('api')
@Controller('api')
export class CoreController {
  constructor(
    private readonly clientService: ClientService,
    private readonly projectService: ProjectService,
    private readonly companyService: CompanyService,
    private readonly walletService: WalletService,
    private readonly partnerService: PartnerService,
    private readonly accountService: AccountService,
    private readonly warehouseService: WarehouseService,
    private readonly fingerprintService: FingerprintService,
    private readonly actionService: ActionService,
  ) {
  }

  /**
   * Client section
   * @param body
   */
  @Post('sign_up')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ description: 'Create new client account'})
  async createClient(@Body() body: ClientDto): Promise<Client> {
    if (body && body.password && body.email) {
      try {
        // check if already exist
        let client = await this.clientService.get(body.email);
        if (!client) {
          client = await this.clientService.create(body);
          // автоматически создаем один проект и одну бессрочную компанию
          const project = await this.projectService.create(client, new ProjectDto());
          const company = await this.companyService.create(project, new CompanyDto());

          return client;
        }
      } catch (error) {
        global.console.error('try create new client', body.email, error);
      }
    }
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }

  @Post('login')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ description: 'Try login account'})
  async login(@Body() body: AccountDto): Promise<Client> {
    if (body && body.password && body.email) {
      return this.clientService.login(body.email, body.password);
    }
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }

  @Post('fp')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ description: 'Try check/add fingerprint'})
  async fp(@Req() request: Request, @Body() body: FpDto) {
    if (body && body.fp) {
      const fingerPrint = this.fingerprintService.get(body.fp);

      // get information from request and store it to fingerPrint
      // store information
      // https://docs.nestjs.com/controllers#request-object
      global.console.info(fingerPrint, request.ip, request.header('referer'));

      return {
        status: 'ok',
      };
    }
    return {
      status: 'error',
    };
  }

  @Post('fp/action')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ description: 'Try add new action'})
  async fpAction(@Req() request: Request, @Body() body: FpActionDto) {
    if (body && body.fp) {
      const fingerPrint = await this.fingerprintService.get(body.fp, false);
      if (fingerPrint) {
        return {
          status: 'error',
          msg: 'fail user',
        };
      }

      // get information from request and store it to fingerPrint
      // store information
      // https://docs.nestjs.com/controllers#request-object
      global.console.info(fingerPrint, request.ip, request.header('referer'));

      // todo: add find project by referer url

      // try find company bu uid
      const company = await this.companyService.getByUid(body.uid); // todo: change getByProjectAndUid
      if (!company) {
        return {
          status: 'error',
          msg: 'fail uid',
        };
      }

      if (body.apiKey) {
        // try find project by apiKey
        const project = await this.projectService.getByApi(body.apiKey);
        if (!project) {
          return {
            status: 'error',
            msg: 'fail apiKey',
          };
        }
        if (company.project !== project) {
          return {
            status: 'error',
            msg: 'access denied',
          };
        }
      }

      // add action
      const action = await this.actionService.add(company, fingerPrint, body.params);

      return {
        status: 'ok',
      };
    }
    return {
      status: 'error',
    };
  }

  @Get('actions')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ description: 'Get information by user actions'})
  async getActions(@Body() body: AccountDto): Promise<Action[]> {
    const client = await this.login(body);
    /*const companies = client.projects.reduce((acc, project) => {
      acc.push(...project.companies);
      return acc;
    }, []);

    return companies.reduce(async (acc, company) => {
      acc.push(... await this.actionService.getList(company));
      return acc;
    }, []);*/
    return this.actionService.getListByClient(client);
  }

  @Post('actions/:id/apply')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ description: 'Apply action'})
  async applyAction(@Param() params, @Body() body): Promise<Action[]> {
    const client = await this.login(body);
    const result = await this.actionService.applyActionById(client, params.id);
    // todo: notify user
    return this.getActions(body);
  }

  @Post('actions/:id/decline')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ description: 'Decline action'})
  async declineAction(@Param() params, @Body() body): Promise<Action[]> {
    const client = await this.login(body);
    await this.actionService.declineActionById(client, params.id);
    // todo: notify user
    return this.getActions(body);
  }
}
