import Ember from 'ember';
import ResetScroll from 'flowfeeds/mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  model: function() {
    return this.store.find('feed');
  },
});
