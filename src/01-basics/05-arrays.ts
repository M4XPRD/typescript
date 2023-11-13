export {};

const numbers: number[] = [1, 2, 3, 4];

const strings: string[] = [];
const strings2: Array<string> = [];

strings.push('1', '2', '3');

interface Car {
  wheels: number,
  brand: string,
  type: string,
}

const cars: Car[] = [];

cars.push({ wheels: 4, brand: 'Toyota', type: '' });

const arrOfArr: string[][] = [];

arrOfArr.push(['1', '2']);

const printArr = (arr: unknown[]): void => {
  arr.forEach((el, index) => {
    console.log(el, index);
  });
};

printArr(['H', 'e', 'l', 'l', 'o']);
