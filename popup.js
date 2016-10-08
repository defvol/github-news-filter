var store = chrome.storage.local

document.addEventListener('DOMContentLoaded', function () {
  var checkboxes = document.querySelectorAll('input[type=checkbox]')
  load(checkboxes)

  for (var i = 0, l = checkboxes.length; i < l; ++i) {
    checkboxes[i].addEventListener('change', function (element) {
      var { checked, value } = element.target
      save(value, checked)
      sendMessage({ action: 'checkbox', checked, value })
    })
  }
})

function load (checkboxes) {
  store.get(function (items) {
    Object.keys(items).forEach(function (k) {
      document.querySelector(`input[name=${k}]`).checked = items[k]
    })
  })
}

function save (key, val, cb) {
  var update = {}
  update[key] = val
  store.set(update, cb)
}

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
