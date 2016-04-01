import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var params = {
        author: this.get('authorInput') ? this.get('authorInput'): "",
        inquiry: this.get('inquiryInput') ? this.get('inquiryInput'): "",
        note: this.get('noteInput') ? this.get('noteInput'): "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
      this.set('authorInput', "");
      this.set('inquiryInput', "");
      this.set('noteInput', "");
    }
  }
});
