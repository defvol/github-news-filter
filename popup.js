
document.addEventListener('DOMContentLoaded', function () {
  var checkboxes = document.querySelectorAll('input[type=checkbox]')
  for (var i = 0, l = checkboxes.length; i < l; ++i) {
    checkboxes[i].addEventListener('change', function (element) {
      var { checked, value } = element.target
      sendMessage({ action: 'checkbox', checked, value })
    })
  }
})

/**
 * Send a message to the active tab
 * @param {object} message
 */
function sendMessage (message) {
  var q = { active: true, currentWindow: true }
  chrome.tabs.query(q, function (tabs) {
    var activeTab = tabs[0]
    chrome.tabs.sendMessage(activeTab.id, message)
  })
}
