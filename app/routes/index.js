import Ember from 'ember';
import ResetScroll from 'flowfeeds/mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.store.findQuery('episode', params);
  }
});
