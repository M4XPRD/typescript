export {};

interface User {
  readonly email: string,
  readonly login: string,
  password: string,
}

interface User {
  isOnline?: boolean,
}

// interface Window {
//   isAuth?: boolean,
// }
// window.isAuth;

interface Person {
  readonly firstName: string,
  lastName: string,
  phone?: string,
  yearOfBirth?: number,
}

interface Employee extends Person, User {
  contractStart: Date,
}

interface Developer extends Employee {
  skills: string[],
  level?: 'junior' | 'middle' | 'senior',
  say(): void,
  code?: (arg: string) => void,
}
