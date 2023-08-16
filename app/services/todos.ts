import Service from '@ember/service';
import { TrackedArray } from 'tracked-built-ins';

export type Todo = {
  id: string;
  name: string;
  description?: string;
};
export default class TodosService extends Service {
  todos: Array<Todo> = new TrackedArray(
    JSON.parse(localStorage.getItem('todos') ?? '[]') as Array<Todo>
  );

  createTodo(name: string) {
    this.todos.push({ id: crypto.randomUUID(), name });
    this.#updateTodosStorage();
  }

  deleteTodo(id: string) {
    const idx = this.todos.findIndex((todo) => id === todo.id);
    this.todos.splice(idx, 1);
    this.#updateTodosStorage();
  }

  editTodo(todo: Todo) {
    if (!todo.id) throw 'Todo must have an ID';
    const idx = this.todos.findIndex((t) => todo.id === t.id);
    this.todos.splice(idx, 1, todo);
    this.#updateTodosStorage();
  }

  #updateTodosStorage() {
    this.todos.sort();
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:todos')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('todos') declare altName: TodosService;`.
declare module '@ember/service' {
  interface Registry {
    todos: TodosService;
  }
}
