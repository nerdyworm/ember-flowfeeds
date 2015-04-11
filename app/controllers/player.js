import Ember from 'ember';

export default Ember.Controller.extend({
  hasContent: Ember.computed.notEmpty('model'),

  playing: false,
  currentTime: 0,
  duration: 0,

  play: function(playable) {
    this.setProperties({
      currentTime: 0,
      content: playable,
      duration: 0,
      loading: true,
      playing: true,
    });
  },

  completed: function() {
    var current  = this.get('currentTime'),
        duration = this.get('duration');

    if ( isNaN(duration) || duration === 0) {
      return 0;
    }

    return (current / duration) * 100;
  }.property('currentTime', 'duration'),

  actions: {
    playPause: function() {
      this.toggleProperty('playing');
    },

    goToContent: function()  {
      this.transitionToRoute('episode', this.get('episode'));
    }
  }
});
