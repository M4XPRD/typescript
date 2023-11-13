/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable @typescript-eslint/no-empty-function */
export {};

const f1 = (arg: { a: number, b: string }) => arg.a + arg.b;

type T0 = ReturnType<typeof f1>;

type T1 = Parameters<typeof f1>;

type T2 = ConstructorParameters<ErrorConstructor>;

class Car {
  constructor(brand: string, model: string) {}
}

type T3 = ConstructorParameters<typeof Car>;
