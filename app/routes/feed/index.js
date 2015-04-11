import Ember from 'ember';
import ResetScroll from 'flowfeeds/mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  beforeModel: function() {
    this.set('lastTop', 0);
  },

  model: function(params) {
    return this.store.findQuery('episode', {
      feed: this.modelFor('feed').get('id'),
      page: params.page
    });
  },
});
