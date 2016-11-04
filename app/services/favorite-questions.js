import Ember from 'ember';

export default Ember.Service.extend({
  favoriteQuestions: [],

  fave(question) {
    this.get('favoriteQuestions').pushObject(question);
  }
});
