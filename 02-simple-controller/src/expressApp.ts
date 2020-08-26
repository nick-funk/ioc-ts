import express, { Express } from "express";
import {injectable} from "tsyringe";

@injectable()
export class ExpressApp {
    private app: Express;

    constructor() {
        this.app = express();
    }

    public instance(): Express {
        return this.app;
    }
}