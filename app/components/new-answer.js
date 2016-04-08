import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var params = {
        reply: this.get('replyInput') ? this.get('replyInput'): "",
        author: this.get('authorInput') ? this.get('authorInput'): "",
        voteCount: 0,
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
