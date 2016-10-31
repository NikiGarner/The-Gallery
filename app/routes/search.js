import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showResults(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
