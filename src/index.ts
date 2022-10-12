import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controller/UserController';


AppDataSource.initialize().then(async () => {


// creates express app, registers all controller routes and returns you express app instance
    const app = createExpressServer({
        controllers: [UserController], // we specify controllers we want to use
    });

// run express application on port 3000

    app.listen(3000, () => {
        console.log(`⚡️[server]: Server is running at 3000`);
    });

}).catch(error => console.log(error))
