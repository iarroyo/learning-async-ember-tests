import { module, test } from 'qunit';
import { setupTest } from 'learning-async-ember-tests/tests/helpers';

module('Unit | Controller | todos/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:todos/index');
    assert.ok(controller);
  });
});
