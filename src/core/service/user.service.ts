import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Account, Client, Company, Project, User } from '../entity';
import { Repository } from 'typeorm';
import { AccountDto, ClientDto, CompanyDto, ProjectDto } from '../dto';
import { UtilService } from './util.service';
import { WarehouseService } from './warehouse.service';
import { WalletService } from './wallet.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly walletService: WalletService,
  ) {
  }

  async create(): Promise<User> {
    try {
      const user = new User();
      user.wallet = await this.walletService.create();

      await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new HttpException('Fail to create user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
