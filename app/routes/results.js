import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   var url = 'https://api.artsy.net/api/tokens/xapp_token?client_id=29124de902cc48f7598f&client_secret=4b0ff9c06ce5301439f1b7eb7dc8b6c6' + params.search;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
