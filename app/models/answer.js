import DS from 'ember-data';

export default DS.Model.extend({
  reply: DS.attr(),
  author: DS.attr(),
  voteCount: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
