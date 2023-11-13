export {};

interface Car {
  wheels: number,
  brand: string,
  type: string,
  isNew?: boolean,
  name?: string,

  [key: string]: unknown,
}

const car1: Car = {
  wheels: 4,
  brand: 'Audi',
  type: 'Liftback',
};

const car2: Car = {
  wheels: 4,
  brand: 'KIA',
  type: 'sedan',
};

car2.mileage = 10_000;
