import { module, test } from 'qunit';
import { setupTest } from 'learning-async-ember-tests/tests/helpers';

module('Unit | Route | todos/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:todos/edit');
    assert.ok(route);
  });
});
