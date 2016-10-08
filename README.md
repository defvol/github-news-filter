# github-news-filter

Chrome Extension to filter out repo conversations from your news feed.

### How it works

- When you click on the extension icon, `content.js` will toggle a `hidden` class on every `issues_*` DOM element.
- Now you can skip conversations and check out starred projects or other cool stuff on your feed.
- This only works on the `*github.com*` domain.

### Installation

1. Clone or [download](https://github.com/rodowi/github-news-filter/releases) repo
2. Go to [chrome://extensions/](chrome://extensions/)
3. Check the 'Developer mode' checkbox
4. Click on 'Load unpacked extension...'
5. Choose directory where this code is located

![install](https://raw.githubusercontent.com/rodowi/github-news-filter/master/install.png)
