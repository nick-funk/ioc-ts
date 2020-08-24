import {injectable} from "tsyringe";

import { ExpressApp } from "../expressApp";

@injectable()
export class HomeController {
    private app: ExpressApp;

    constructor(app: ExpressApp) {
        this.app = app;
    }

    public init() {
        this.app.instance()
            .get("/", (req, res) => {
                res.send("Hello");
            });
    }
}