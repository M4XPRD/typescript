/* eslint-disable class-methods-use-this */
interface ICar {
  go(speed: number): void,
}

// Interfaces aren't necessary in classes

export class Car implements ICar {
  go(speed: number) {
    console.log('Let us go with speed of', speed.toFixed());
  }

  stop() {
    console.log('Stop');
  }
}

const car = new Car();
car.go(50);
