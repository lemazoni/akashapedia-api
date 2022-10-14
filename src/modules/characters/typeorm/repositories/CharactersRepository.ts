
import {AppDataSource} from "../../../../data-source";
import Character from "@modules/characters/typeorm/entities/Character";

interface IRequest{
    name?: string;
    vision?: string;
    weapon?: string;
    stars?: number;

}


export const CharactersRepository = AppDataSource.getRepository(Character).extend({
    getCharactersList(filter: IRequest) {
        const query = this.createQueryBuilder("character");
        const name = filter.name
        if(filter.name){
            query.where(`character.name LIKE "%${name}%"` , {name: filter.name})
        }
        if(filter.vision){
            query.andWhere('character.vision =:vision', {vision: filter.vision})
        }
        if (filter.weapon){
            query.andWhere('character.weapon =:weapon', {weapon:filter.weapon})
        }
        if(filter.stars != 0){
            query.andWhere('character.stars =:stars', {stars: filter.stars})
        }
        return query.getMany()
    }
});
