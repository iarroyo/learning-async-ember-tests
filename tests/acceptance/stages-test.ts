import {
  click,
  currentRouteName,
  getSettledState,
  settled,
  visit,
  waitFor,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | async-operations', function (hooks) {
  setupApplicationTest(hooks);
  test(`Given an user in the index page
        When the user clicks on the Stage1 from the breadcrumb
        Then the /stage1 route is displayed`, async function (assert) {
    await visit('/'); // <- Right way
    //visit('/'); //<- Wrong way
    const routeName = currentRouteName();
    assert.strictEqual(routeName, 'index', 'we landed in the index route');
    console.info('Im going to click');

    //Wrong way 1
    /*
    click('[data-test-link-stage1]');
    assert.dom('[data-test-list-loader]').exists();
    */

    //Wrong way 2
    /*
    await click('[data-test-link-stage1]');
    assert.dom('[data-test-list-loader]').exists();
    */

    //Right way
    click('[data-test-link-stage1]');
    const loader = await waitFor('[data-test-list-loader]');
    if (Array.isArray(loader)) throw 'Multiple [data-test-list-loader] found';
    assert.dom(loader).isVisible();

    assert.dom('[data-test-list-stage1]').exists();

    //It is required to ensure the async process has finished
    console.log('applying settled');
    await settled();

    assert.dom('[data-test-list-end]').exists();

    const settledInfo = getSettledState();
    console.log(settledInfo);

    /*
    const stage1Info = await waitFor('[data-test-stage1]');
    if (Array.isArray(stage1Info))
      throw 'Multiple [data-test-stage1] were found';
    assert.dom(stage1Info).exists();
    */

    assert.dom('[data-test-stage1]').exists();

    assert.dom('[data-sublist-end]').exists();

    //await this.pauseTest();
  });
});
