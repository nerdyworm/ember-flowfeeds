import Ember from 'ember';

export default Ember.Component.extend({
  image: null,
  classNames: ['cover-image'],
  attributeBindings: ['style'],
  style: function(){
    return 'background-image:url("%@"); background-repeat: no-repeat; background-size: cover; background-position: 50%;'.fmt(
      this.get('image')
    ).htmlSafe();
  }.property('image')
});
