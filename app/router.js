import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('colors');
  this.route('typography');
  this.route('buttons');
  this.route('components');
});

export default Router;
