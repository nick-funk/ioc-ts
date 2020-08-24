import {injectable} from "tsyringe";

import { ExpressApp } from "./expressApp";
import { HomeController } from "./controllers/home";

@injectable()
export class Core {

    private port: number;
    private app: ExpressApp;

    private home: HomeController;

    constructor(app: ExpressApp, home: HomeController) {
        this.port = 3000;
        this.app = app;

        this.home = home;
    }

    public run() {
        // initialize controllers
        this.home.init();

        // start up the server
        this.app.instance().listen(this.port, (err) => {
            if (err) {
                return console.error(err);
            }
        
            return console.log(`now listening on ${this.port}...`);
        });
    }
}