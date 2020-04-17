import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as cryptoRandomString from 'crypto-random-string';

import { Company, Wallet } from '../entity';
import { CompanyStatus, WalletStatus } from '../enum';
import { WalletDto } from '../dto';
import { WarehouseService } from './warehouse.service';
import Decimal from 'decimal.js';

const PUSH_WALLET_ID_LENGTH = 16;

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
    private readonly warehouseService: WarehouseService,
  ) {
  }

  async create(): Promise<Wallet> {
    try {
      const wallet = new Wallet();
      wallet.wallet = this.generateUniqWalletId();
      wallet.status = WalletStatus.NEW;
      // todo: generate mxaddress

      await this.walletRepository.save(wallet);

      return wallet;
    } catch (error) {
      global.console.error({ error, });
      throw new HttpException('Fail to create wallet', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public generateUniqWalletId(length: number = PUSH_WALLET_ID_LENGTH): string {
    return cryptoRandomString({
      length,
      type: 'url-safe',
    });
  }
}
