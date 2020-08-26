import { injectable } from "tsyringe";

import { ExpressApi } from "../expressApi";
import { UserRepository } from "../data/repositories/userRepository";

@injectable()
export class UserController {
    private api: ExpressApi;
    private users: UserRepository;

    constructor(api: ExpressApi, users: UserRepository) {
        this.api = api;
        this.users = users;
    }

    public init() {
        const api = this.api.instance();

        api.get("/users", (req, res) => {
            const users = this.users.all();
            res.send(users);
        });

        api.get("/user/:userId", (req, res) => {
            const userId = req.params.userId;
            if (!userId) {
                res.sendStatus(400);
                return;
            }

            const user = this.users.get(userId);

            if (user) {
                res.status(200);
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        });
    }
}