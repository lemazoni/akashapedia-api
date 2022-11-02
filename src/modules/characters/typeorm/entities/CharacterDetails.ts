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

@Entity('charactersDetails')
class  CharacterDetails {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    splash: string;

    @Column()
    title: string;

    @Column()
    ocupation: string;

    @Column()
    birthday: Date;

    @Column()
    flavor_text: string;

    @Column()
    association: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export  default  CharacterDetails
