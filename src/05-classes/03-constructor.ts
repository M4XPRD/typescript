/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
export class Vehicle {
  // private createdAt: Date;

  constructor(protected createdAt: Date) {}

  public drive(speed: number): void {
    console.log('Let us go with speed of', speed.toFixed());
    this.log(speed);
  }

  public stop() {
    console.log('Stop');
  }

  private log(speed: number) {
    console.log('Vehicle has changed speed to', speed, this.createdAt);
  }

  protected altLog(text: string) {
    console.log(text.toUpperCase());
  }
}

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

const car1 = new Car('red', 200);
