import Ember from 'ember';

export function trollAnswer(params/*, hash*/) {
  var answerVotes = parseInt(params[0].get('votes'));

  if (answerVotes < -3) {
    return Ember.String.htmlSafe('<span><img class="troll-icon pull-right" src="https://cdn2.iconfinder.com/data/icons/identificon/96/troll-512.png"><span>');
  }
}

export default Ember.Helper.helper(trollAnswer);
