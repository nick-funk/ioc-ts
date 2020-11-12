import { injectable } from "tsyringe";

import { User } from "../models/User";
import { UserLoader } from "../loader/userLoader";

@injectable()
export class GetUserById {
  private userLoader: UserLoader;

  constructor(userLoader: UserLoader) {
    this.userLoader = userLoader;
  }

  public async execute(id: string): Promise<User> {
    return this.userLoader.get(id);
  }
}