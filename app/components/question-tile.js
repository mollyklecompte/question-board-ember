import Ember from 'ember';

export default Ember.Component.extend({
  answerCount: Ember.computed('question.answers', function() {
    return this.get('question.answers').get('length');
  }),
});
