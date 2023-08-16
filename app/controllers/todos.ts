import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import TodosService, { Todo } from 'learning-async-ember-tests/services/todos';

export default class TodosController extends Controller {
  @service('todos') declare todosService: TodosService;

  get todos() {
    return this.todosService.todos;
  }

  @action
  onDeleteTodo(id: string) {
    this.todosService.deleteTodo(id);
  }

  @action
  onEditTodo(todo: Todo) {
    this.todosService.editTodo(todo);
  }

  @action
  navigatesToDetails() {
    console.log('navigation...');
  }
}
