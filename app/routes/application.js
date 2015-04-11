import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signout: function() {
      this.controllerFor('sessions').destroy();
    },

    play: function(episode) {
      var player = this.controllerFor('player');
      player.play(episode);

      var user = this.controllerFor('sessions').get('user');
      episode.addListen(user);
    },

    toggleFavorite: function(episode) {
      var route = this;
      var user = this.controllerFor('sessions').get('user');
      episode.favorite(user).then(Ember.K, function(error) {
        if (error.status && error.status === 401) {
          route.send('openModal', 'signup-modal');
        }
      });
    },

    toggleNav: function() {
      Ember.$('#nav').toggleClass('in');
    },

    openModal: function(modalName) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },

    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },

    closeModalAndSignUp: function() {
      this.send('closeModal');
      this.transitionTo('signup');
    },
  },

});
