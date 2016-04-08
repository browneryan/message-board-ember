import DS from 'ember-data';

export default DS.Model.extend({
  inquiry: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  voteCount: DS.attr('number'),
  answers: DS.hasMany('answer', { async: true })
});
