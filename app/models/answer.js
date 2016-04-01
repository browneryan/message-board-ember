import DS from 'ember-data';

export default DS.Model.extend({
  reply: DS.attr(),
  author: DS.attr(),
  questions: DS.hasMany('question', { async: true})
});
