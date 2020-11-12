import { injectable } from "tsyringe";
import { GetAllUsersQuery } from "../data/queries/getAllUsers";
import { GetUserById } from "../data/queries/getUserById";

import { ExpressApi } from "../expressApi";
import { Mediator } from "../mediator";

@injectable()
export class UserController {
    private api: ExpressApi;
    private mediator: Mediator;

    constructor(
        api: ExpressApi,
        mediator: Mediator,
    ) {
        this.api = api;
        this.mediator = mediator;
    }

    public init() {
        const api = this.api.instance();

        api.get("/users", async (req, res) => {
            const query = this.mediator.resolve<GetAllUsersQuery>(GetAllUsersQuery);
            const users = await query.execute();
            res.send(users);
        });

        api.get("/user/:userId", async (req, res) => {
            const userId = req.params.userId;
            if (!userId) {
                res.sendStatus(400);
                return;
            }

            const query = this.mediator.resolve<GetUserById>(GetUserById);
            const user = await query.execute(userId);

            if (user) {
                res.status(200);
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        });
    }
}