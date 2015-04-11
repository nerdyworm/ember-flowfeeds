import Ember from 'ember';

export default Ember.View.extend({
  elementId: 'nav',

  click: function() {
    this.$().toggleClass('in');
  }
});
