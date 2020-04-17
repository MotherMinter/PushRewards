import {MigrationInterface, QueryRunner} from "typeorm";

export class InitMigration1586860058728 implements MigrationInterface {
    name = 'InitMigration1586860058728'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `wallet` (`id` int NOT NULL AUTO_INCREMENT, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `wallet` varchar(64) NOT NULL, `mxaddress` varchar(42) NULL, `status` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `finger_print` (`id` int NOT NULL AUTO_INCREMENT, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `fingerprint` varchar(32) NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `warehouse` (`id` int NOT NULL AUTO_INCREMENT, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `mxaddress` varchar(42) NULL, `owner` varchar(42) NULL, `seed` text NOT NULL, `balances` text NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `company` (`id` int NOT NULL AUTO_INCREMENT, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `notice` text NULL, `params` text NULL, `status` int NOT NULL, `uid` varchar(36) NOT NULL, `warehouseWalletId` int NULL, `clientId` int NULL, `projectId` int NULL, UNIQUE INDEX `REL_c42d950990042d772f87d396ed` (`warehouseWalletId`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `project` (`id` int NOT NULL AUTO_INCREMENT, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `notice` text NULL, `params` text NULL, `apiKey` text NULL, `status` int NOT NULL, `uid` varchar(36) NOT NULL, `warehouseWalletId` int NULL, `clientId` int NULL, UNIQUE INDEX `REL_a461a73bca7357b8238efdb5ff` (`warehouseWalletId`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `client` (`id` int NOT NULL AUTO_INCREMENT, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `email` varchar(512) NULL, `password` varchar(64) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `transaction` (`id` int NOT NULL AUTO_INCREMENT, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `hash` varchar(66) NOT NULL, `actionId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `action` (`id` int NOT NULL AUTO_INCREMENT, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `params` text NULL, `status` int NOT NULL, `uid` varchar(36) NOT NULL, `clientId` int NULL, `companyId` int NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `account` (`id` int NOT NULL AUTO_INCREMENT, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `email` varchar(512) NULL, `password` varchar(64) NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `finger_print` ADD CONSTRAINT `FK_f7a4f48a7f2986efbacda15d766` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `company` ADD CONSTRAINT `FK_c42d950990042d772f87d396edb` FOREIGN KEY (`warehouseWalletId`) REFERENCES `warehouse`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `company` ADD CONSTRAINT `FK_37af69df2666b672a93d39ca396` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `company` ADD CONSTRAINT `FK_346bc8e5830702184b516f2e8a0` FOREIGN KEY (`projectId`) REFERENCES `project`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `project` ADD CONSTRAINT `FK_a461a73bca7357b8238efdb5ffc` FOREIGN KEY (`warehouseWalletId`) REFERENCES `warehouse`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `project` ADD CONSTRAINT `FK_816f608a9acf4a4314c9e1e9c66` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `transaction` ADD CONSTRAINT `FK_4710610665b88648ee1ece40b90` FOREIGN KEY (`actionId`) REFERENCES `action`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `action` ADD CONSTRAINT `FK_9d934041872cfc73876fc0fdb70` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `action` ADD CONSTRAINT `FK_24e4f35dfccf55a2ff7637beaa9` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `action` ADD CONSTRAINT `FK_b2e3f7568dafa9e86ae03910111` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `account` ADD CONSTRAINT `FK_60328bf27019ff5498c4b977421` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `account` DROP FOREIGN KEY `FK_60328bf27019ff5498c4b977421`", undefined);
        await queryRunner.query("ALTER TABLE `action` DROP FOREIGN KEY `FK_b2e3f7568dafa9e86ae03910111`", undefined);
        await queryRunner.query("ALTER TABLE `action` DROP FOREIGN KEY `FK_24e4f35dfccf55a2ff7637beaa9`", undefined);
        await queryRunner.query("ALTER TABLE `action` DROP FOREIGN KEY `FK_9d934041872cfc73876fc0fdb70`", undefined);
        await queryRunner.query("ALTER TABLE `transaction` DROP FOREIGN KEY `FK_4710610665b88648ee1ece40b90`", undefined);
        await queryRunner.query("ALTER TABLE `project` DROP FOREIGN KEY `FK_816f608a9acf4a4314c9e1e9c66`", undefined);
        await queryRunner.query("ALTER TABLE `project` DROP FOREIGN KEY `FK_a461a73bca7357b8238efdb5ffc`", undefined);
        await queryRunner.query("ALTER TABLE `company` DROP FOREIGN KEY `FK_346bc8e5830702184b516f2e8a0`", undefined);
        await queryRunner.query("ALTER TABLE `company` DROP FOREIGN KEY `FK_37af69df2666b672a93d39ca396`", undefined);
        await queryRunner.query("ALTER TABLE `company` DROP FOREIGN KEY `FK_c42d950990042d772f87d396edb`", undefined);
        await queryRunner.query("ALTER TABLE `finger_print` DROP FOREIGN KEY `FK_f7a4f48a7f2986efbacda15d766`", undefined);
        await queryRunner.query("DROP TABLE `account`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
        await queryRunner.query("DROP TABLE `action`", undefined);
        await queryRunner.query("DROP TABLE `transaction`", undefined);
        await queryRunner.query("DROP TABLE `client`", undefined);
        await queryRunner.query("DROP INDEX `REL_a461a73bca7357b8238efdb5ff` ON `project`", undefined);
        await queryRunner.query("DROP TABLE `project`", undefined);
        await queryRunner.query("DROP INDEX `REL_c42d950990042d772f87d396ed` ON `company`", undefined);
        await queryRunner.query("DROP TABLE `company`", undefined);
        await queryRunner.query("DROP TABLE `warehouse`", undefined);
        await queryRunner.query("DROP TABLE `finger_print`", undefined);
        await queryRunner.query("DROP TABLE `wallet`", undefined);
    }
}
