## Discourse Twitter Stream

This plugin is for adding a Twitter stream to your Discourse forum.

![alt tag](https://cloud.githubusercontent.com/assets/2975917/10836337/860d47e2-7e69-11e5-92a0-e00992d0939d.png)

### Installation

Follow the [Install a Plugin](https://meta.discourse.org/t/install-a-plugin/19157) howto, using
`git clone https://github.com/scossar/discourse-twitter-stream` as the plugin command.

### Use

To use this plugin you must first create a 'widget' through your Twitter account.
To do that, first click on your Twitter profile picture. From the drop-down menu select 'settings'.
In the settings drop-down menu select 'widgets'. On the widgets page click on 'create new'.

On the 'create new' page, in order to create a widget that will give you a Twitter stream for
a hashtag, select 'search' from the timeline sources. Enter your desired hashtag
in the 'search query' text input box and click the create widget button. Copy the
generated code.

In the admin section of your Discourse forum, select 'plugins' and then 'discourse-twitter'.
On the discourse-twitter settings page, make sure the 'twitter enabled' check box is
checked. Paste your Twitter widget code into the 'twitter widget code' text box, click
the green checkmark that appears, and then refresh your browser for the changes
to take effect.

![alt tag](https://cloud.githubusercontent.com/assets/2975917/10836334/74f72c3e-7e69-11e5-9d1b-7abfcb28e687.png)

To remove the Twitter logo from the header, go to the settings page and unselect 'twitter enabled'.

### Get Involved

I made this plugin because it seems like a neat idea, but I am not using it myself.
**This code is only lightly tested.** If you are having trouble with this plugin,
please let me know.

Pull requests and suggestions for improvement are always welcome.

