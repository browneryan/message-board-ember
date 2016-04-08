import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['voteCount:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),

  updateAnswerForm: false,
  actions: {
    update(answer, params) {
      this.sendAction('update', answer, params);
    },
    upvote(answer) {
      this.sendAction('upvote', answer);
    }
  }
});
