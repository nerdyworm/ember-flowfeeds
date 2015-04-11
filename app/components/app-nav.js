import Ember from 'ember';

export default Ember.Component.extend({
  elementId: ['nav'],

  actions: {
    toggle: function() {
      this.$().toggleClass('in');
    },

    signout: function() {
      this.sendAction('signout');
    }
  }
});
