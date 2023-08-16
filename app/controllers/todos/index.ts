import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { resource } from 'ember-resources';
import TodosService from 'learning-async-ember-tests/services/todos';

export default class TodosIndexController extends Controller {
  todos = resource(() => {
    const todos = localStorage.getItem('todos') ?? [];
    return todos;
  });

  //declare formElement: HTMLFormElement;

  @service('todos') declare todosService: TodosService;

  /*
  setFormElement = modifier((element: HTMLFormElement) => {
    this.formElement = element;
  });*/

  @action
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const todoName = data['todoName'] as string;
    if (!todoName) throw 'Todo name is mandatory';
    form.reset();
    this.todosService.createTodo(todoName);
  }
}
