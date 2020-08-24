import "reflect-metadata";
import {container} from "tsyringe";

import { ExpressApp } from "./expressApp";
import { Core } from "./core";
import { HomeController } from "./controllers/home";

// Controllers
container.register<HomeController>(HomeController, { useClass: HomeController });

// Core app object
container.registerSingleton<ExpressApp>(ExpressApp);
container.registerSingleton<Core>(Core);

// Start it up
const core = container.resolve(Core);
core.run();