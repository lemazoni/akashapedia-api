import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import Status from "@modules/characters/typeorm/entities/Status";

@Entity('characters')
class  Character {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name: string;

    @Column()
    vision: string;

    @Column()
    weapon: string;

    @Column('int')
    stars: number;

    @Column()
    icon: string;

    @OneToOne(()=> Status)
    @JoinColumn()
    status: Status;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export  default  Character
