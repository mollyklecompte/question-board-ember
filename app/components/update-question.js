import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestionFormHide() {
      this.set('updateQuestionForm', false);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        date: new Date(),
        content: this.get('content'),
        notes: this.get('notes'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
