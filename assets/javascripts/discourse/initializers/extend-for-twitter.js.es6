import HeaderController from 'discourse/controllers/header';
import HeaderView from 'discourse/views/header';

export default {
  name: 'extend-for-twitter',
  initialize () {
    HeaderController.reopen({
      twitterEnabled: function () {
        return this.siteSettings.twitter_enabled;
      }.property(),

      widgetCode: function () {
        return this.siteSettings.twitter_widget_code;
      }.property(),

      widgetVisible: false,

      actions: {
        toggleTwitter: function () {
          this.toggleProperty('widgetVisible');
          this.appEvents.trigger('dropdowns:closeAll');
        },

        toggleSearch: function () {
          this._super();
          if (this.get('widgetVisible')) {
            this.set('widgetVisible', false);
          }
        },
      }
    });

    HeaderView.reopen({
      twitterWidgetScript: function () {
        window.twttr = (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function (f) {
            t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));
      }.on('didInsertElement'),

    });
  }
}