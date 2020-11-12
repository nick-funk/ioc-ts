import { injectable } from "tsyringe";

import { User } from "../models/User";
import { Db } from "../db";

@injectable()
export class UserLoader {
  private userRepository: Db;
  private cache: User[];

  constructor(userRepository: Db) {
    this.userRepository = userRepository;
    this.cache = new Array<User>();
  }

  all(): User[] {
    return this.userRepository.getAllUsers();
  }

  get(id: string): User {
    const cachedUser = this.cache.find(u => u.id === id);
    if (cachedUser) {
      return cachedUser;
    }

    return this.userRepository.getUser(id);
  }
}