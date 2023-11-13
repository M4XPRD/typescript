export {};

/* Record

Is used for same-type data

*/

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

// const myBrands: BrandNames = {
//   apple: '',
// };

/* Pick | Omit

They work with objects and their keys

*/

interface Todo {
  id: string,
  title: string,
  description: string,
  completed: boolean,
  createdAt: number,
}

type SimpleTodo1 = Pick<Todo, 'id' | 'title' | 'completed'>;

const todo1: SimpleTodo1 = {
  id: '123',
  title: 'TS',
  completed: false,
};

type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>;

type NewTodo = Pick<Todo, 'title' | 'description'>;
