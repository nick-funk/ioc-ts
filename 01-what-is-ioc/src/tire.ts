import {injectable} from "tsyringe";

@injectable()
export class Tire {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
}