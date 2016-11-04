import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    upVote(answer) {
      var params = {
        votes: answer.set('votes', answer.get('votes')+1)
      };
      this.sendAction('upVote', answer, params);
    },
    downVote(answer) {
      var params = {
        votes: answer.set('votes', answer.get('votes')-1)
      };
      this.sendAction('downVote', answer, params);
    },

  }
});
