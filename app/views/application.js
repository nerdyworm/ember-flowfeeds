import Ember from 'ember';
/* global FastClick */

export default Ember.View.extend({
  classNames: ['application-view'],

  didInsertElement: function() {
    var that = this;
    Ember.run.schedule('afterRender', function() {
      var loading = document.getElementById('page-loading');
      loading.parentNode.removeChild(loading);

      setTimeout(function() {
        that.$().addClass('loaded');
      }, 0);
    });

    FastClick.attach(document.body);
  }
});
