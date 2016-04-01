import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        author: this.get('authorInput') ? this.get('authorInput'): question.get('authorInput'),
        inquiry: this.get('inquiryInput') ? this.get('inquiryInput'): question.get('inquiryInput'),
        note: this.get('noteInput') ? this.get('noteInput'): question.get('noteInput'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
