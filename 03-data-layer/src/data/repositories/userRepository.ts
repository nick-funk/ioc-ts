import { injectable } from "tsyringe";

import { User } from "../models/User";
import { Db } from "../db";

@injectable()
export class UserRepository {
    private db: Db;

    constructor(db: Db) {
        this.db = db;
    }

    all(): User[] {
        return this.db.getAllUsers();
    }

    get(id: string): User {
        return this.db.getUser(id);
    }
}