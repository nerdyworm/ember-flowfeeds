import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: ['page'],
  page: 1,
  isPending: false,

  pages: function() {
    return this.get('content.meta.pagination.pages');
  }.property('content.meta'),

  isNewerVisible: function() {
    if (this.get('page') > 1) {
      return true;
    }

    return false;
  }.property('page', 'pages'),

  isOlderVisible: function() {
    if (this.get('page') < this.get('pages')) {
      return true;
    }

    return false;
  }.property('page', 'pages'),

  actions: {
    older: function() {
      this.set('isPending', true);
      this.transitionToRoute({queryParams: {page: this.get('page') + 1}}).then(function() {
        this.set('isPending', false);
      }.bind(this));
    },

    newer: function() {
      this.set('isPending', true);
      this.transitionToRoute({queryParams: {page: this.get('page') - 1}}).then(function() {
        this.set('isPending', false);
      }.bind(this));
    }
  },
});
