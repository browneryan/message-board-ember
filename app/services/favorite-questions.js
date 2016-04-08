import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(item) {
    this.get('favorites').pushObject(item);
  }
});
