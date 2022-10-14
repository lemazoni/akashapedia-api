
import {AppDataSource} from "../../../../data-source";
import Character from "@modules/characters/typeorm/entities/Character";

export const CharactersRepository = AppDataSource.getRepository(Character).extend({
    getCharactersList(name?: string, vision?: string, weapon?: string, stars?: number) {
        const query = this.createQueryBuilder("character");
        if(name){
            query.where('character.name LIKE %${:name}%' , {name})
        }
        if(vision){
            query.andWhere('character.vision =:vision', {vision})
        }
        if (weapon){
            query.andWhere('character.weapon =:weapon', {weapon})
        }
        if(stars){
            query.andWhere('character.stars =:stars', {stars})
        }
        return query.getMany()
    }
});
