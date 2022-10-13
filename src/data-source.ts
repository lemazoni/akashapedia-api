import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    password: "admin",
    database: "AkashapediaDB",
    synchronize: true,
    logging: true,
    entities: ["./src/modules/**/typeorm/entities/*.ts"],
    subscribers: [],
    migrations: [ "./src/shared/typeorm/migrations/*.ts" ],
    
})
