import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

const id = new TableColumn({
  name: 'id',
  type: 'varchar',
  isPrimary: true,
  isGenerated: true,
  generationStrategy: 'uuid'
});

const clientId = new TableColumn({
  name: 'client_id',
  type: 'int',
  isNullable: false
});

const dealerId = new TableColumn({
  name: 'dealer_id',
  type: 'int',
  isNullable: false
});

const vin = new TableColumn({
  name: 'vin',
  type: 'varchar',
  isNullable: false
});

const status = new TableColumn({
  name: 'status',
  type: 'varchar',
  isNullable: false
});

const customerName = new TableColumn({
  name: 'customer_name',
  type: 'varchar',
  isNullable: false
});

const zipCode = new TableColumn({
  name: 'zip_code',
  type: 'varchar',
  isNullable: false
});

const county = new TableColumn({
  name: 'county',
  type: 'varchar',
  isNullable: false
});

const dueDate = new TableColumn({
  name: 'due_date',
  type: 'timestamp',
  isNullable: false
});

const mvpa = new TableColumn({
  name: 'mvpa',
  type: 'varchar',
  isNullable: false
});

const insurance = new TableColumn({
  name: 'insurance',
  type: 'varchar',
  isNullable: false
});

const createdAt = new TableColumn({
  name: 'created_at',
  type: 'timestamp',
  isNullable: false,
  default: 'CURRENT_TIMESTAMP'
});

const updatedAt = new TableColumn({
  name: 'updated_at',
  type: 'timestamp',
  isNullable: false,
  default: 'CURRENT_TIMESTAMP'
});

const deletedAt = new TableColumn({
  name: 'deleted_at',
  type: 'timestamp',
  isNullable: true
});

const tempTags = new Table({
  name: 'temp_tags',
  columns: [
    id,
    clientId,
    dealerId,
    vin,
    status,
    customerName,
    zipCode,
    county,
    dueDate,
    mvpa,
    insurance,
    createdAt,
    updatedAt,
    deletedAt
  ]
});

export class addigTemptags1665529691924 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(tempTags, true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tempTags, true, true);
  }

}
