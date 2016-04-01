import DS from 'ember-data';

export default DS.Model.extend({
  inquiry: DS.attr(),
  author: DS.attr(),
  note: DS.attr()
  answer: DS.belongsTo('answer', {async: true})
});
