import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('episode', {path: '/e/:episode_id'}, function() {

  });
  this.resource('feeds', {path: '/feeds'}, function() {
  });
  this.resource('feed', {path: '/f/:feed_id'}, function() {

  });
  this.resource('artist', {path: '/a/:artist_id'}, function() {

  });
  this.route('nav');
  this.route('featured');
  this.route('about');
  this.route('signup');
  this.route('signin');
});

export default Router;
