import {injectable} from "tsyringe";

import { ExpressApi } from "./expressApi";
import { HomeController } from "./controllers/home";
import { UserController } from "./controllers/user";

@injectable()
export class Core {

    private port: number;
    private exp: ExpressApi;

    private homeController: HomeController;
    private userController: UserController;

    constructor(
        exp: ExpressApi, 
        homeController: HomeController,
        userController: UserController) 
    {
        this.port = 3000;
        this.exp = exp;

        this.homeController = homeController;
        this.userController = userController;
    }

    public run() {
        this.setupControllers();

        // start up the server
        this.exp.instance().listen(this.port, (err) => {
            if (err) {
                return console.error(err);
            }
        
            return console.log(`now listening on ${this.port}...`);
        });
    }

    private setupControllers() {
        this.homeController.init();
        this.userController.init();
    }
}