import Route from '@ember/routing/route';
import Transition from '@ember/routing/transition';
import TodosEditController from 'learning-async-ember-tests/controllers/todos/edit';
import { Todo } from 'learning-async-ember-tests/services/todos';

type Params = object & { id: string };
export default class TodosEditRoute extends Route {
  declare todoId: string;
  model(params: Params, _transition: Transition<unknown>): Omit<Todo, 'name'> {
    return {
      id: params.id,
    };
  }

  setupController(
    controller: TodosEditController,
    model: Omit<Todo, 'name'>,
    transition: Transition<unknown>
  ): void {
    super.setupController(controller, model, transition);
    controller.id = model.id;
  }
}
