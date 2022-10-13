import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class CreateCharactersLogoTable1665704880732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'characters',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'vision',
                    type: 'varchar',
                },
                {
                    name: 'weapon',
                    type: 'varchar',
                },
                {
                    name: 'stars',
                    type: 'int',
                },
                {
                    name: 'logo',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('characters');

    }

}
