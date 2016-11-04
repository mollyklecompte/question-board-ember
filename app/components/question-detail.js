import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    upVote(answer, params) {
      this.sendAction('upVote', answer, params);
    },
    faveThisQuestion(question) {
      this.get('favoriteQuestions').fave(question);
    },
  }
});
