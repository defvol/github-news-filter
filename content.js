console.log('you are on GitHub')

chrome.runtime.onMessage.addListener(clickListener)

function clickListener (request, sender, sendResponse) {
  if( request.message === 'clicked_browser_action' ) {
    console.log('and now you clicked the extension icon')
  }
}
