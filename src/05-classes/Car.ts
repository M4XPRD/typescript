import { Vehicle } from './03-constructor';

export class Car extends Vehicle {
  // public color: string;
  // public maxSpeed: number;
  constructor(public readonly color: string, public maxSpeed: number) {
    super(new Date());
    // this.color = color;
    // this.maxSpeed = maxSpeed;
  }

  getInfo() {
    console.log(
      this.color,
      this.maxSpeed,
      this.createdAt,
    );
  }
}
