import { injectable } from "tsyringe";

import { User } from "../models/User";
import { UserRepository } from "../repositories/userRepository";

@injectable()
export class UserLoader {
  private userRepository: UserRepository;
  private cache: User[];

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
    this.cache = new Array<User>();
  }

  all(): User[] {
    return this.userRepository.all();
  }

  get(id: string): User {
    const cachedUser = this.cache.find(u => u.id === id);
    if (cachedUser) {
      return cachedUser;
    }

    return this.userRepository.get(id);
  }
}