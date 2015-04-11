import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',

  ajaxError: function(jqXHR) {
    var error = this._super(jqXHR);

    if (jqXHR && jqXHR.status === 422) {
      var response = Ember.$.parseJSON(jqXHR.responseText),
      errors = {};

      if (response.Errors !== undefined) {
        var jsonErrors = response.Errors;

        Ember.keys(jsonErrors).forEach(function(key) {
          errors[Ember.String.camelize(key)] = jsonErrors[key];
        });
      }

      return new DS.InvalidError(errors);
    } else {
      return error;
    }
  }
});

