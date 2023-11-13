/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
export class Vehicle {
  public drive(speed: number): void {
    console.log('Let us go with speed of', speed.toFixed());
    this.log(speed);
  }

  public stop() {
    console.log('Stop');
  }

  private log(speed: number) {
    console.log('Vehicle has changed speed to', speed);
  }

  protected altLog(text: string) {
    console.log(text.toUpperCase());
  }
}

class Car extends Vehicle {
  public changeSpeed(speed: number) {
    this.drive(speed);
    this.altLog('Speed has changed');
  }
}

const car1 = new Car();

car1.drive(55);
car1.stop();
