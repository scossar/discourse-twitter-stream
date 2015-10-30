import HeaderController from 'discourse/controllers/header';
import HeaderDropdown from 'discourse/components/header-dropdown';

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

      twitterVisible: false,

      actions: {
        toggleTwitter: function () {
          let twitterVisible = this.get('twitterVisible');
          if (!twitterVisible) {
            window.twttr = (function (d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
              //if (d.getElementById(id)) return t;
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
          }

          this.toggleProperty('twitterVisible');
          this.appEvents.trigger('dropdowns:closeAll');
        },
      }

    });

    HeaderDropdown.reopen({
      actions: {
        toggle() {
          Ember.$('#twitter-wjs', 'head').remove();
          this._super();
        }
      }
    });
  }
}