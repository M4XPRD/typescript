export {};

type Status = 'fulfilled' | 'pending' | 'error';

const currentStatus: Status = 'pending';

const arr: (number | string)[] = [];

const printID = (id: number | string): void => {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
};

const welcome = (person: [string, string] | string): number | string => {
  if (Array.isArray(person)) {
    const [name, surname] = person;
    console.log(`Hello, ${name} ${surname}`);
    return 1;
  }
  console.log('Hello, ', person);
  return person;
};
