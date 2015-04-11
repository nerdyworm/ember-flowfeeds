import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['sessions'],

  email: null,
  password: null,
  errors: null,

  actions: {
    signin: function() {
      var controller = this;
      controller.set('errors', null);

      var data = {
        Session: {
          Email: this.get('email'),
          Password: this.get('password'),
        }
      };

      Ember.$.ajax({
        type: 'POST',
        url: '/api/v1/sessions',
        dataType: 'json',
        data: JSON.stringify(data)
      }).then(function(payload) {
        var id = payload.User.Id;
        controller.store.pushPayload(payload);

        var user = controller.store.getById('user', id);
        controller.get('controllers.sessions').begin(user);
        controller.transitionToRoute('index').then(function() {
          controller.reset();
        });
      }, function() {
        controller.set('errors', 'Invalid email or password.');
      });
    },
  },

  reset: function() {
    this.setProperties({
      email: null,
      password: null,
      errors: null,
    });
  },
});
