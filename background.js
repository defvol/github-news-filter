
chrome.browserAction.onClicked.addListener(function (tab) {
  // send a message to the active tab
  var q = { active: true, currentWindow: true }
  chrome.tabs.query(q, function (tabs) {
    var activeTab = tabs[0]
    var m = { message: 'clicked_browser_action' }
    chrome.tabs.sendMessage(activeTab.id, m)
  })
})
