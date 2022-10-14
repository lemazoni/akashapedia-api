import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import {errors} from  'celebrate';
import {AppDataSource} from "../../data-source";
const app = express();

const MyDataSource = AppDataSource;

MyDataSource.initialize().then(() =>{
    console.log(`⚡️[DB]: Connected to Database`);
}).catch((error) => console.log(error));


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    },
);


app.listen(3000, () =>{
    console.log(`⚡️[server]: Server is running at 3000`);
});
