import Character from "@modules/characters/typeorm/entities/Character";
import {CharactersRepository} from "@modules/characters/typeorm/repositories/CharactersRepository";


interface IRequest{
    name?: string;
    vision?: string;
    weapon?: string;
    stars?: number;

}

class ListCharactersService {
    public async execute(filter: IRequest): Promise<Character[]>{
        const charactersRepository = CharactersRepository;
        const characters = await charactersRepository.getCharactersList(filter);
        return characters;
    }
}

export  default  ListCharactersService;
