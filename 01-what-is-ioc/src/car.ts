import {injectable} from "tsyringe";

import { Tire } from "./tire";

@injectable()
export class Car {
    public frontLeftTire: Tire;
    public frontRightTire: Tire;
    public backLeftTire: Tire;
    public backRightTire: Tire;

    constructor(
        frontLeftTire: Tire,
        frontRightTire: Tire,
        backLeftTire: Tire,
        backRightTire: Tire
    ) {
        this.frontLeftTire = frontLeftTire;
        this.frontRightTire = frontRightTire;
        this.backLeftTire = backLeftTire;
        this.backRightTire = backRightTire;
    }
}