export default Ember.Component.extend({
  classNames: ['twitter-panel'],
  loadingTweets: false,

  // Setting this at 2s is just a guess. It needs to be hooked into an event
  // that indicates the content has loaded.
  tweetsLoaded: function () {
    if (this.get('visible')) {
      this.set('loadingTweets', true);
      Ember.run.later(this, function () {
        this.toggleProperty('loadingTweets');
      }, 2000);
    }
  }.observes('visible'),

});