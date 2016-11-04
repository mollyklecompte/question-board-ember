import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    answerFormHide() {
      this.set('addNewAnswer', false);
    },
    saveAnswer() {
     var params = {
       author: this.get('author'),
       date: new Date(),
       rating: parseInt(this.get('rating')),
       content: this.get('content'),
       question: this.get('question'),
       votes: 0,
     };
     if (this.get('rating') <0 || this.get('rating') >5) {
       alert("Please choose a rating between 1 and 5.");
     }
     else if (this.get('author') && this.get('content') &&this.get('rating')) {
       this.set('addNewAnswer', false);
       this.sendAction('saveAnswer', params);
     } else {
       alert("Please fill out all fields");
    }
    this.set('author', '');
    this.set('rating', null);
    this.set('content', '');
   }
  }
});
