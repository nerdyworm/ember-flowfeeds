import Ember from 'ember';

export default Ember.View.extend({
  elementId: 'player',

  classNameBindings: ['controller.hasContent'],

  urlChanged: function() {
    var url = this.get('controller.model.url');

    if (Ember.isNone(url)) {
      return;
    }

    if (Ember.isNone(this.audio)) {
      this.audio = new window.Audio();
      this.$().append(this.audio);
      this.bindAudioEvents();
    }

    if (this.isSameUrl(url)) {
      return;
    }

    this.audio.src = url;
    this.audio.play();
  }.observes('controller.model.url'),

  isSameUrl: function(url) {
    return this.audio.currentSrc.toLowerCase() === url.toLowerCase();
  },

  playingChanged: function() {
    if (Ember.isNone(this.audio)) {
      return;
    }

    if (this.get('controller.playing')) {
      this.audio.play();
    } else {
      this.audio.pause();
    }

  }.observes('controller.playing'),

  bindAudioEvents: function() {
    var controller = this.get('controller');
    var audio = this.audio;

    audio.onloadeddata = function() {
      controller.set('loading', false);
    };

    audio.onprogress = function() {
      controller.setProperties({
        currentTime: audio.currentTime,
        duration: audio.duration,
      });
    };
  },

  progressStyle: function() {
    return 'width: %@%;'.fmt(this.get('controller.completed')).htmlSafe();
  }.property('controller.completed')

});
