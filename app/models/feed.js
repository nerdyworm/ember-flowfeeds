import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  cover: DS.attr('string'),
  image: DS.attr('string'),
  updated: DS.attr('string')
});
