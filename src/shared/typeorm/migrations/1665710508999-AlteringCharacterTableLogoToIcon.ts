import {MigrationInterface, QueryRunner} from "typeorm"



export class AlteringCharacterTableLogoToIcon1665710508999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE characters RENAME COLUMN logo TO icon`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE characters RENAME COLUMN icon TO logo`,
        );

    }

}
