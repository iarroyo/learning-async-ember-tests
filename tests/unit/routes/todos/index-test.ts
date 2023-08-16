import { module, test } from 'qunit';
import { setupTest } from 'learning-async-ember-tests/tests/helpers';

module('Unit | Route | todos/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:todos/index');
    assert.ok(route);
  });
});
