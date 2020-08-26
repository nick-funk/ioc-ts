import "reflect-metadata";
import { container } from "tsyringe";

import { Tire } from "./tire";
import { Car } from "./car";

container.register<Tire>(Tire, { useValue: new Tire(40) });
container.register<Car>(Car, { useClass: Car });

const car = container.resolve(Car);

console.log(`Car:`);
console.log(`- front left tire: ${car.frontLeftTire.radius}`);
console.log(`- front right tire: ${car.frontRightTire.radius}`);
console.log(`- back left tire: ${car.backLeftTire.radius}`);
console.log(`- back right tire: ${car.backRightTire.radius}`);