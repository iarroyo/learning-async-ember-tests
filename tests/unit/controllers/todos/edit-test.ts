import { module, test } from 'qunit';
import { setupTest } from 'learning-async-ember-tests/tests/helpers';

module('Unit | Controller | todos/edit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:todos/edit');
    assert.ok(controller);
  });
});
