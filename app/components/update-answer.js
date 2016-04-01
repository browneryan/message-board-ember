import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    update(answer) {
      var params = {
        reply: this.get('replyInput') ? this.get('replyInput'): answer.get('replyInput'),
        author: this.get('authorInput') ? this.get('authorInput'): author.get('answerInput'),
      };
      // debugger;
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, params);
    }
  }
});
