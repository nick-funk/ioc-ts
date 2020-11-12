import "reflect-metadata";
import {container} from "tsyringe";

import { ExpressApi } from "./expressApi";
import { Core } from "./core";
import { HomeController } from "./controllers/home";
import { UserController } from "./controllers/user";
import { Db } from "./data/db";
import { UserRepository } from "./data/repositories/userRepository";
import { UserLoader } from "./data/loader/userLoader";
import { Mediator } from "./mediator";
import { GetAllUsersQuery } from "./data/queries/getAllUsers";
import { GetUserById } from "./data/queries/getUserById";

// Controllers
container.register<HomeController>(HomeController, { useClass: HomeController });
container.register<UserController>(UserController, { useClass: UserController });

// Create the db
container.registerSingleton<Db>(Db);

// Data layer
container.register<UserLoader>(UserLoader, { useClass: UserLoader });
container.registerSingleton<UserRepository>(UserRepository);

// Queries
container.register<GetAllUsersQuery>(GetAllUsersQuery, { useClass: GetAllUsersQuery });
container.register<GetUserById>(GetUserById, { useClass: GetUserById });

// Core app object
container.registerSingleton<ExpressApi>(ExpressApi);
container.registerSingleton<Core>(Core);

const mediator = new Mediator(container);
container.registerInstance<Mediator>(Mediator, mediator);

// Start it up
const core = container.resolve(Core);
core.run();