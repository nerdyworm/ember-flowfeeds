/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pick = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();

app.import('bower_components/moment/moment.js');
app.import('bower_components/fastclick/lib/fastclick.js');

var bootstrapFonts = pick('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
  srcDir: '/',
  destDir: '/assets/boostrap'
});

module.exports = mergeTrees([
  app.toTree(),
  bootstrapFonts,
]);
