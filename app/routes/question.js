import Ember from 'ember';

export default Ember.Route.extend({
  return this.store.findRecord('question', params.question_id);
  },
  actions: {
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      console.log(params.question.get('title'));
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question');
    },
    update(answer, params) {
      console.log(params);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key, params[key]);
        }
      });
      answer.save();
      this.transitionTo('question');
    }
  }
});
