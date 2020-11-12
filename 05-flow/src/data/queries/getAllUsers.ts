import { injectable } from "tsyringe";

import { User } from "../models/User";
import { UserLoader } from "../loader/userLoader";

@injectable()
export class GetAllUsersQuery {
  private userLoader: UserLoader;

  constructor(userLoader: UserLoader) {
    this.userLoader = userLoader;
  }

  public async execute(): Promise<User[]> {
    return this.userLoader.all();
  }
}