import Ember from 'ember';
import ResetScroll from 'flowfeeds/mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  beforeModel: function() {
    this.set('lastTop', 0);
  },
});
