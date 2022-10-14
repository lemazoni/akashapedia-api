import  {Router} from 'express';
import characterRouter from "@modules/characters/routes/characters.routes";

const routes = Router();

routes.use('/characters', characterRouter)

export  default  routes;
