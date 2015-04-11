import Ember from 'ember';

export default Ember.Controller.extend({
  user: null,

  begin: function(user) {
    this.set('user', user);
  },

  destroy: function() {
    var controller = this;
    Ember.$.ajax({
      type: 'DELETE',
      url: '/api/v1/sessions',
    }).then(function() {
      controller.set('user', null);
    });
  }
});
