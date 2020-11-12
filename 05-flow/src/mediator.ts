import { DependencyContainer, injectable, InjectionToken } from "tsyringe";

@injectable()
export class Mediator {
    private container: DependencyContainer;
    constructor(container: DependencyContainer) {
      this.container = container;
    }

    resolve<T>(token: InjectionToken<T>): T {
      return this.container.resolve(token);
    }
}