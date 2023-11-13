export {};

type Answer1 = 64 extends number ? true : false; // true

type Answer2 = number extends 64 ? true : false; // false

type Answer3 = string[] extends any ? true : false; // true

type Answer4 = string[] extends any[] ? true : false; // true

type Answer5 = never extends any ? true : false; // true

type Answer6 = any extends any ? true : false; // true

type Answer7 = Date extends { new(...args: any[]): any }
  ? true
  : false; // false

type Answer8 = typeof Date extends { new(...args: any[]): any }
  ? true
  : false; // true
