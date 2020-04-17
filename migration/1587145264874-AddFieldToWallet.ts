import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFieldToWallet1587145264874 implements MigrationInterface {
    name = 'AddFieldToWallet1587145264874'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `walletId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_922e8c1d396025973ec81e2a40` (`walletId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_922e8c1d396025973ec81e2a40` ON `user` (`walletId`)", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_922e8c1d396025973ec81e2a402` FOREIGN KEY (`walletId`) REFERENCES `wallet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_922e8c1d396025973ec81e2a402`", undefined);
        await queryRunner.query("DROP INDEX `REL_922e8c1d396025973ec81e2a40` ON `user`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_922e8c1d396025973ec81e2a40`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `walletId`", undefined);
    }

}
