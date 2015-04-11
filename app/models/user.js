import DS from 'ember-data';

export default DS.Model.extend({
  avatar: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
});
