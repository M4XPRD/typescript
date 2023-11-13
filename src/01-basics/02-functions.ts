const sum = (a: number, b: number): number => a + b;

const log = (name: string, userID?: number): void => {
  console.log(`Hello, ${name} ${userID ?? 'with unknown ID'}`);
};

const crash = (): never => {
  throw new Error('crash');
};

export const average = (...nums: number[]) => nums.reduce((acc, num) => acc + num) / nums.length;

console.log(average(1, 2, 3));
