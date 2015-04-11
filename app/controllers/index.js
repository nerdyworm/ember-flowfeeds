import Ember from 'ember';
import Pagination from 'flowfeeds/mixins/pagination';

export default Ember.ArrayController.extend(Pagination, {
  needs: ['sessions', 'player'],
  currentUser: Ember.computed.alias('controllers.sessions.user'),
  player: Ember.computed.alias('controllers.player'),
});
