import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       author: this.get('author'),
       date: new Date(),
       rating: this.get('rating'),
       content: this.get('content'),
       question: this.get('question')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
