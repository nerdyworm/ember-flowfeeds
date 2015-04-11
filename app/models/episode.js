import DS from 'ember-data';
import Ember from 'ember';
//import ajax from 'ic-ajax';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  kind: DS.attr('string'),
  episode: DS.attr('number'),
  cover: DS.attr('string'),
  feed: DS.belongsTo('feed'),
  guid: DS.attr('string'),

  image: DS.attr('string'),

  favorited: DS.attr('boolean'),
  listened: DS.attr('boolean'),

  listensCount: DS.attr('number'),
  favoritesCount: DS.attr('number'),
  published: DS.attr('date'),

  artist: Ember.computed.alias('feed.title'),

  related: DS.hasMany('episode', { async: true }),
  listens: DS.hasMany('listen', { async: true }),
  favorites: DS.hasMany('favorite', { async: true }),

  addListen: function(user) {
    var listen = this.store.createRecord('listen', {
      episode: this,
      user: user,
    });

    return listen.save();
  },

  favorite: function() {
    this.toggleProperty('favorited');

    var that = this;
    return this.save().then(function() {
      that.get('favorites').reload();
    });
  },

});
