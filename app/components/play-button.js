import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['play-button'],

  playing: false,

  click: function() {
    this.sendAction();
  }
});
