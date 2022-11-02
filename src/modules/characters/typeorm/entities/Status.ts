import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('status')
class  Status {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    level: number;

    @Column()
    ascension: number;

    @Column('float')
    hp: number;

    @Column('float')
    atk: number;

    @Column('float')
    def: number;

    @Column()
    ascension_stat: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export  default  Status
