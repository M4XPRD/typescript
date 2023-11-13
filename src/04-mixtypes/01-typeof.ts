import { average } from '../01-basics/02-functions';

const str = 'Hello';

type X = typeof str;

type Fn = typeof average;

// Return the whole function types, like number[]
// type Fn = (...nums: number[]) => number

const max: Fn = (...numbers) => Math.max(...numbers);

max(8, 99, 233); // 233

// Returns the function result type -> number

type ReturnFn = ReturnType<typeof average>;

export {};
