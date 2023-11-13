export {};

const x = 16;
const isNegative = x >= 0 ? 'no' : 'yes';

interface StringRecord {
  [key: string]: string,
}

interface DateRecord {
  [key: string]: Date,
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord;

type Object1 = MyRecord<string>;
type Object2 = MyRecord<Date>;

const o1: Object1 = {
  r: '123',
};
const o2: Object2 = {
  r: new Date(2023, 10, 10),
};
