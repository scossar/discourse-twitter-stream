export default Ember.View.extend({
  tagName: 'li',
  classNames: ['t-toggle'],
  classNameBindings: ['twitterVisible'],

  twitterVisible: Ember.computed.alias('controller.twitterVisible'),

});