import Ember from 'ember';

export function noAnswer(params) {
  var answerCount = params[0];

  console.log(answerCount.get('answers') === true);
  if (answerCount.get('answers').get('length') > 0) {
    return Ember.String.htmlSafe('<span class="hasAnswer"></span>');
  } else {
    return Ember.String.htmlSafe('<p class="noAnswer">No answers yet!</p>');
  }
}

export default Ember.Helper.helper(noAnswer);
