import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['sessions', 'player'],
  currentUser: Ember.computed.alias('controllers.sessions.user'),
  player: Ember.computed.alias('controllers.player'),
});
