import HeaderController from 'discourse/controllers/header';
import HeaderView from 'discourse/views/header';
import ApplicationView from 'discourse/views/application';

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
    });

    HeaderView.reopen({
      //didInsertElement: function () {
      //  var script = window.document.createElement('script');
      //  script.id = 'twitter-script';
      //  script.src = '//platform.twitter.com/widgets.js';
      //  script.charset = 'utf-8';
      //  window.$('body').append(script);
      //},

      //WillDestroyElement: function () {
      //  window.$('#twitter-script', 'body').remove();
      //}

      //didInsertElement: function () {
      //
      //}

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