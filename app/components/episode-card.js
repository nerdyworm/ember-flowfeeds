import Ember from 'ember';

export default Ember.Component.extend({
  user: null,
  player: null,
  episode: null,

  classNameBindings: ['played'],
  classNames: ['episode-card'],

  actions: {
    playPause: function() {
      if (this.get('loadedInPlayer')) {
        this.get('player').send('playPause');
      } else {
        this.sendAction('playTeaser', this.get('episode'));
      }
    },

    toggleFavorite: function() {
      this.sendAction('toggleFavorite', this.get('episode'));
    }
  },

  favorited: Ember.computed.alias('episode.favorited'),
  played: Ember.computed.alias('episode.listened'),

  loadedInPlayer: function() {
    return this.get('player.id') === this.get('episode.id');
  }.property('player.id', 'episode.id'),

  playing: function() {
    return this.get('player.playing') && this.get('loadedInPlayer');
  }.property('loadedInPlayer', 'player.playing'),
});
