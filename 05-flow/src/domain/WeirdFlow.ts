import { injectable } from "tsyringe";
import { UserLoader } from "../data/loader/userLoader";
import { GetAllUsersQuery } from "../data/queries/getAllUsers";
import { GetUserById } from "../data/queries/getUserById";

@injectable()
export default class WeirdFlow {
  private userLoader: UserLoader;

  constructor(userLoader: UserLoader) {
    // Cach the data loader we're going to use
    // so that we can re-use it instead of pulling in
    // a new one for each query
    this.userLoader = userLoader;
  }

  public async process(id: string) {
    // Initialize both of these queries with the
    // same loader cache so we get the benefits of it 
    // across our flow operations
    const userByIdQuery = new GetUserById(this.userLoader);
    const allUsersQuery = new GetAllUsersQuery(this.userLoader);

    // Pull out our data now that we're all set up
    const user = await userByIdQuery.execute(id);
    const all = await allUsersQuery.execute();

    // return weird combined object
    return {
      user,
      all
    };
  }
}