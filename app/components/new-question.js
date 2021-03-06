import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
actions: {
  questionFormShow() {
    this.set('addNewQuestion', true);
  },
  questionFormHide() {
    this.set('addNewQuestion', false);
  },

  saveQuestion1() {
    var params = {
      author: this.get('author'),
      date: new Date(),
      content: this.get('content'),
      notes: this.get('notes'),
    };
      if (this.get('author') && this.get('content') &&this.get('notes')) {
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion2', params);
      }
      else {
        alert("Please fill out all fields");
      }
    }
  }
});
