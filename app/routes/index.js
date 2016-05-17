import Ember from 'ember';

export default Ember.Route.extend({
  toggleHeader(bool) {
    this.controllerFor('application').set('showHeader', bool);
  },
  activate: function() {
    this.toggleHeader(false);
  },
  deactivate: function() {
    this.toggleHeader(true);
  }
});
