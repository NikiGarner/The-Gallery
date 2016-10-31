import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showResults() {
      var params = {
        search: this.get('search')
      };
      this.sendAction('showResults', params);
    }
  }
});
