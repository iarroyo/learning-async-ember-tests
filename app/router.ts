import EmberRouter from '@ember/routing/router';
import config from 'learning-async-ember-tests/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('stage', function () {
    this.route('stage1');
    this.route('stage2');
    this.route('stage3');
  });
});
