import Ember from 'ember';
/* global moment */

export default Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).fromNow();
});
