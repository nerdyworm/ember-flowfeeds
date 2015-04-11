import Ember from 'ember';
import DS from 'ember-data';

function upperCamelize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default DS.RESTSerializer.extend({
  primaryKey: 'Id',

  extractMeta: function(store, type, payload) {
    if (payload && payload.Meta) {
      var metadata = payload.Meta;

      var meta = {};

      if (metadata.Pagination) {
        meta.pagination = {
          pages: metadata.Pagination.Pages,
          page: metadata.Pagination.Page,
          limit: metadata.Pagination.Limit,
          total: metadata.Pagination.Total,
        };
      }

      store.setMetadataFor(type, meta);
      delete payload.Meta;
    }
  },

  serializeAttribute: function(record, json, key, attribute) {
    if (attribute.options.readOnly) {
      return;
    }

    return this._super(record, json, key, attribute);
  },

  serializeIntoHash: function(data, type, record, options) {
    var root = upperCamelize(type.typeKey);
    data[root] = this.serialize(record, options);
  },

  keyForAttribute: function(attr) {
    return upperCamelize(attr);
  },

  keyForRelationship: function(key/*, relationship*/) {
    return upperCamelize(key);
  },

  serializeHasMany: function(record, json, relationship) {
    if (relationship.options.async || relationship.options.readOnly) {
      return;
    }

    var key = this.keyForRelationship(relationship.key, relationship);

    var relationshipType = DS.RelationshipChange.determineRelationshipType(record.constructor, relationship);

    if (relationshipType === 'manyToNone' || relationshipType === 'manyToMany') {
      json[key] = Ember.get(record, relationship.key).mapBy('id');
    }
  },

  typeForRoot: function(root) {
    var camelized = Ember.String.camelize(root);
    return Ember.String.singularize(camelized);
  },
});

