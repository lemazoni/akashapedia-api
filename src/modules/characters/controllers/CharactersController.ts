import {Request, Response} from "express";
import ListCharactersService from "@modules/characters/services/ListCharactersService";


export default class CharactersController {


    public async show(request: Request, response: Response): Promise<Response> {

        console.log(request.query)

        const listCharacters = new ListCharactersService();

        const characters = await listCharacters.execute();

        return response.json(characters);

    }

}
