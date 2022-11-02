import Character from "@modules/characters/typeorm/entities/Character";
import {CharactersRepository} from "@modules/characters/typeorm/repositories/CharactersRepository";


interface IRequest{
    name?: string;
    vision?: string;
    weapon?: string;
    stars?: number;

}

class GetCharacterService {
    public async execute(id: string): Promise<Character>{
        const charactersRepository = CharactersRepository;
        const character = await charactersRepository.getCharacterDetails(id);
        if(character == undefined){
            throw new Error('Character not found');
        }
        return character!;
    }
}

export  default  GetCharacterService;
