import {injectable} from "tsyringe";

import { ExpressApi } from "./expressApi";
import { HomeController } from "./controllers/home";

@injectable()
export class Core {

    private port: number;
    private api: ExpressApi;

    private home: HomeController;

    constructor(api: ExpressApi, home: HomeController) {
        this.port = 3000;
        this.api = api;

        this.home = home;
    }

    public run() {
        // initialize controllers
        this.home.init();

        // start up the server
        this.api.instance().listen(this.port, (err) => {
            if (err) {
                return console.error(err);
            }
        
            return console.log(`now listening on ${this.port}...`);
        });
    }
}