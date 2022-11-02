import {Request, Response} from "express";
import ListCharactersService from "@modules/characters/services/ListCharactersService";
import GetCharacterService from "@modules/characters/services/GetCharacterService";


interface IRequest{
    name: string;
    vision: string;
    weapon: string;
    stars: number;
}

export default class CharactersController {

    public  async getCharacter(request: Request, response: Response): Promise<Response> {
        let id = request.params.characterId;
        const characterRepo = new GetCharacterService();
        const character = await characterRepo.execute(id);
        return response.json(character);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        let name = '';
        let vision = '';
        let stars = 0;
        let weapon = '';

        if(request.query.name != undefined){
           name = request.query.name.toString();
        }
        if(request.query.vision != undefined){
            vision = request.query.vision.toString();
        }
        if(request.query.stars != undefined){
            stars = parseInt(request.query.stars.toString());
        }
        if(request.query.weapon != undefined){
            weapon = request.query.weapon.toString();
        }


        const listCharacters = new ListCharactersService();

        const characters = await listCharacters.execute({ name, vision, stars, weapon});

        return response.json(characters);

    }

}
