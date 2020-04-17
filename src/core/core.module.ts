import { Module  } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { CoreController } from './core.controller';
import { Account, Action, Client, Company, FingerPrint, Project, User, Wallet, Warehouse } from './entity';
import {
  AccountService, ActionService,
  CompanyService, FingerprintService,
  PartnerService, UtilService,
  WalletService,
  WarehouseService,
} from './service';
import { ClientService } from './service/client.service';
import { ProjectService } from './service/project.service';
import { UserService } from './service/user.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Client, Action, FingerPrint, Project,
    Warehouse, Company, Wallet, Account, User])],
  controllers: [CoreController],
  providers: [CompanyService, WarehouseService, WalletService, AccountService,
    PartnerService, AccountService, ActionService, ClientService, FingerprintService,
    ProjectService, UserService, UtilService,
  ],
  // exports: [CoreService],
})
export class CoreModule {}
