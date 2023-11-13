export {};

// Example #1

const printPoint = (point: { x: string, y: string }): void => {
  console.log(`Coordinates of X is ${point.x} and Y is ${point.y}`);
};

const point1 = { x: '1', y: '2' };

printPoint(point1);

const point2 = { x: '3', y: '4', z: '5' };

printPoint(point2);

// Example #2

const printName = (user: { firstName: string, lastName?: string }): void => {
  console.log('Hello', user.firstName.toUpperCase());
  if (user.lastName) {
    console.log('Nice to meet you, Mr.', user.lastName.toUpperCase());
  }
};

printName({ firstName: 'Max' });
printName({ firstName: 'Max', lastName: 'P' });
