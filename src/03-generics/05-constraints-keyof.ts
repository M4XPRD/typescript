export {};

const prop = <T, U extends keyof T>(key: U, obj: T): T[U] => obj[key];

const obj1 = { a: 1, b: 2, c: 3 };
prop('a', obj1);
