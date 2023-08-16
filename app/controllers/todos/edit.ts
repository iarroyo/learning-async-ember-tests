import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import TodosService from 'learning-async-ember-tests/services/todos';
import { tracked } from 'tracked-built-ins';

export default class TodosEditController extends Controller {
  @tracked
  declare id: string;

  @service('todos') declare todosService: TodosService;

  get todo() {
    console.log('get todo...');
    if (!this.id) return;
    return this.todosService.todos.find((t) => this.id === t.id);
  }

  @action
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const todoName = data['todoName'] as string;
    if (this.todo) {
      const todo = Object.assign(structuredClone(this.todo), {
        name: todoName,
      });
      this.todosService.editTodo(todo);
    }
  }
}
