import express, { Express } from "express";
import {injectable} from "tsyringe";
import bodyParser from "body-parser";

@injectable()
export class ExpressApi {
    private app: Express;

    constructor() {
        this.app = express();

        this.app.use(bodyParser.json());
    }

    public instance(): Express {
        return this.app;
    }
}