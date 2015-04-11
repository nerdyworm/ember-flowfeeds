import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['fav-button', 'btn', 'btn-default'],
  classNameBindings: ['favorited'],

  favorited: false,

  click: function() {
    this.sendAction();
  }
});
