/* eslint-disable prefer-arrow/prefer-arrow-functions */
export {};

/*

Generics examples:

Array<string> -> string[]

Promise<number>

*/

type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

const toArray = <T>(...args: T[]): T[] => args;

toArray<number>(1, 2, 3);
toArray<string>('a', 'b', 'c');

function head<T>(value: readonly T[]): T;
function head(value: readonly[]): undefined;
function head(value: any): any {
  return typeof value === 'string' ? value : value[0];
}

head(['12q', 'asas']);

const head2 = <T>(value: T[]): T => value[0];

//

interface ModelData<T> {
  title: string,
  value: T,
}

const obj1: ModelData<number> = {
  title: 'title',
  value: 12,
};

const obj2: ModelData<Array<number>> = {
  title: '123',
  value: [1234],
};
