import {Router} from "express";
import {celebrate, Joi, Segments} from 'celebrate'
import CharactersController from "@modules/characters/controllers/CharactersController";

const characterRouter = Router()
const charactersController = new CharactersController();

characterRouter.get('/', charactersController.show);


export default  characterRouter;
