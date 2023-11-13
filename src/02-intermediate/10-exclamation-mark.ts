export {};

// "!" operator means that the value is definitely there
// "!" is good in testing and bad in production

let word: string | null = null;

const num = 10;

if (num > 5) {
  word = 'ABC';
}

console.log(word!.toLowerCase());

//

const printName = (name?: string) => {
  const fullName: string = name!;
};

//

interface Person {
  name: string,
  age: number,
}

const printName2 = (person?: Person) => {
  console.log(person!.name);
};
