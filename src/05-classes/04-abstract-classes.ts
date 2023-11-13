/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

// "abstract" doesn't allow to create new Vehicle instance

abstract class Vehicle {
  abstract color: string;

  abstract drive(speed: number): void;

  public stop() {
    console.log('Stopped');
  }
}

export class Car extends Vehicle {
  constructor(public color: string) {
    super();
  }

  drive(speed: number): void {
    console.log(speed);
  }
}

const v1 = new Car('cyan');

v1.stop();
