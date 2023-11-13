export {};

// Сужение типов

const example1 = (strings?: string | string[] | null) => {
  if (strings && typeof strings === 'object') {
    return strings.join();
  } if (typeof strings === 'string') {
    return strings.toUpperCase();
  }
  return 'Null';
};

const example2 = (x: number[] | Date) => {
  if (x instanceof Date) {
    return 'This is a date';
  }
  return 'This is an array';
};

type Fish = {
  swim: () => void,
};

type Bird = {
  fly: () => void,
};

const move = (animal: Fish | Bird) => {
  if ('swim' in animal) {
    return animal.swim();
  }
  return animal.fly();
};
