import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  episode: DS.belongsTo('episode'),
});
