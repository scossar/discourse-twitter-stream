export default Ember.View.extend({
  tagName: 'li',
  classNames: ['twitter-toggle'],
  classNameBindings: ['twitterVisible'],

  twitterVisible: Ember.computed.alias('controller.twitterVisible'),
});