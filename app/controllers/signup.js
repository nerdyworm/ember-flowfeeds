import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['sessions'],

  email: null,
  password: null,
  errors: null,

  actions: {
    signup: function() {
      var controller = this;

      var user = this.store.createRecord('user',
        this.getProperties('email', 'password'));

      user.save().then(function() {
        controller.get('controllers.sessions').begin(user);
        controller.transitionToRoute('index').then(function() {
          controller.reset();
        });
      }, function() {
        controller.set('errors', user.get('errors'));
        user.transitionTo('uncommitted');
        user.destroyRecord();
        user.save();
      });
    }
  },

  reset: function() {
    this.setProperties({
      email: null,
      password: null,
      errors: null,
    });
  }
});
