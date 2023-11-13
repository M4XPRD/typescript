/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
/*

Опишите типы для двух функций:

export function keys(obj) {

  const currentKeys = [];

  for (let key in obj) {

    if (obj.hasOwnProperty(key)) currentKeys.push(key);

  }

  return currentKeys;

}

export function values(obj) {

  const currentValues = [];

  for (let key in obj) {

    currentValues.push(obj[key]);

  }

  return currentValues;

}

*/

export const keys = <O extends object>(obj: O): Array<keyof O> => {
  const currentKeys = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }
  return currentKeys;
};

export const values = <O extends object>(obj: O): Array<O[keyof O]> => {
  const currentValues = [];
  for (const key in obj) {
    currentValues.push(obj[key]);
  }
  return currentValues;
};
