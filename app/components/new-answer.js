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
       rating: this.get('rating'),
       content: this.get('content'),
       question: this.get('question')
     };
     if (this.get('author') && this.get('content') &&this.get('rating')) {
       this.set('addNewAnswer', false);
       this.sendAction('saveAnswer', params);
     }
     else {
       alert("Please fill out all fields");
    }
   }
  }
});
