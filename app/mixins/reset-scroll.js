import Ember from 'ember';

export default Ember.Mixin.create({
  lastTop: 0,

  actions: {
    didTransition: function() {
      this.scrollToTop();
      return true;
    }
  },

  deactivate: function() {
    this.set('lastTop', Ember.$(window).scrollTop());
  },

  scrollToTop: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      Ember.run.next(this, function() {
        window.scrollTo(0, 0);
      });
    });
  },
});
