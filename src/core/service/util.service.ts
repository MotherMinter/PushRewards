import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account, Client, Company, Project } from '../entity';
import { Repository } from 'typeorm';
import { AccountDto, ClientDto, CompanyDto, ProjectDto } from '../dto';
import * as cryptoRandomString from 'crypto-random-string';

@Injectable()
export class UtilService {
  public generateUniqWalletId(length): string {
    return cryptoRandomString({
      length,
      type: 'url-safe',
    });
  }
}
