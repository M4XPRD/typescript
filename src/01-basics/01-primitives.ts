export {};

// numbers

let x: number = 10.5;

x = 11;

const y = NaN;

// string

let str: string = 'A word';

str = 'A whole sentence';

const symb = Symbol('test');

// boolean

let a: boolean = true;

a = false;

// nothing

const q: undefined = undefined;

const w: null = null;

// literal

const num = 108;
const str2 = 'str';

// universal

let anything: any = 1;
anything = 'Text';
anything = [];

const wtf: unknown = 2;

if (typeof wtf === 'string') {
  wtf.toUpperCase();
}
