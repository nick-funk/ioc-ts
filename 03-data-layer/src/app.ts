import "reflect-metadata";
import {container} from "tsyringe";

import { ExpressApi } from "./expressApi";
import { Core } from "./core";
import { HomeController } from "./controllers/home";
import { UserController } from "./controllers/user";
import { Db } from "./data/db";
import { UserRepository } from "./data/repositories/userRepository";

// Controllers
container.register<HomeController>(HomeController, { useClass: HomeController });
container.register<UserController>(UserController, { useClass: UserController });

// Create the db
container.registerSingleton<Db>(Db);

// Data layer
container.register<UserRepository>(UserRepository, { useClass: UserRepository });

// Core app object
container.registerSingleton<ExpressApi>(ExpressApi);
container.registerSingleton<Core>(Core);

// Start it up
const core = container.resolve(Core);
core.run();