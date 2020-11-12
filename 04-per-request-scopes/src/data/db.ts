import { injectable } from "tsyringe";

import { User } from "./models/User";

@injectable()
export class Db {
    private users: User[];

    constructor() {
        this.users = [];

        this.seed();
    }

    seed() {
        this.users.push({
            id: "89a34357-04a6-48eb-9b75-e8b3f2a23698",
            name: "User1"
        });
        this.users.push({
            id: "055103f1-56c1-4b56-9a90-8b672c626780",
            name: "User2"
        });
    }

    getAllUsers(): User[] {
        return this.users;
    }

    getUser(id: string): User {
        return this.users.find(u => u.id === id);
    }
}