/* eslint-disable prefer-arrow/prefer-arrow-functions */
export {};

// Works only with standart functions
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

add(1, 2);

type AsyncCb = (res: number) => number;

function asyncSum(a: number, b: number): number;
function asyncSum(a: number, b: number, cb: AsyncCb): Promise<number>;
function asyncSum(a: number, b: number, cb?: AsyncCb): any {
  const result = a + b;
  if (cb) {
    return cb(result);
  }
  return Promise.resolve(result);
}
