/* eslint-disable no-restricted-syntax */
/*

Опишите типы для следующей функции:

*/

export const createMap = <T>(list: T[]) => <U>(cb: (x: T) => U): U[] => {
  const result = [];
  for (const el of list) {
    result.push(cb(el));
  }
  return result;
};
