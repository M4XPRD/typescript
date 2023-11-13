export {};

interface Todo {
  id: string,
  title: string,
  description?: string,
  completed: boolean,
  createdAt: number,
}

type ReadOnlyTodo = Readonly<Todo>;

type PartialTodo = Partial<Todo>;

const updateTodo = (todo: Todo, fieldsToUpdate: PartialTodo) => ({ ...todo, fieldsToUpdate });

type RequiredTodo = Required<Todo>;

/*

All 6 utilities: Record, Pick, Omit, Partial, Readonly, Required

*/
