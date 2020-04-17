import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account, Company } from '../entity';
import { Repository } from 'typeorm';
import { AccountDto, CompanyDto } from '../dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {
  }

  /*async create(accountData: AccountDto, file = null): Promise<Account> {
    try {
      const account = new Account();
      account.email = accountData.email;
      account.password = accountData.password;
      account.brand = accountData.brand;

      if (file) {
        account.logo = `/tmp/uploads/${file.filename}`;
      }

      await this.accountRepository.save(account);

      return account;
    } catch (error) {
      global.console.error({ error, data: accountData });
      throw new HttpException('Fail to create new account', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(account: Account, accountData: AccountDto, file = null): Promise<Account> {
    try {
      account.brand = accountData.brand;

      if (file) {
        account.logo = `/tmp/uploads/${file.filename}`;
      }

      await this.accountRepository.save(account);

      return account;
    } catch (error) {
      global.console.error({ error, data: accountData });
      throw new HttpException('Fail to update account', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async get(email: string, passwordHash: string): Promise<Account> {
    let account;
    try {
      account = await this.accountRepository.findOneOrFail({ email, password: passwordHash }, { relations: ['companies'] });
    } catch (error) {
      // global.console.error('error get account', email);
      throw new HttpException('Bad password', HttpStatus.UNAUTHORIZED);
    }

    return account;
  }*/
}
