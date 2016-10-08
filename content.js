
chrome.runtime.onMessage.addListener(clickListener)

function clickListener (request, sender, sendResponse) {
  if (request.message === 'clicked_browser_action') toggleFilter()
}

function toggleFilter () {
  var issues = document.querySelectorAll('[class*=issues_]')
  for (var i = 0, l = issues.length; i < l; ++i) {
    var issue = issues[i]
    issue.classList.toggle('hidden')
  }
}
