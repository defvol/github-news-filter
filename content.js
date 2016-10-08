const filters = {
  issues: '[class*=issues_]',
  push: '[class*=push]'
}

chrome.runtime.onMessage.addListener(clickListener)

function clickListener (request, sender, sendResponse) {
  toggleFilter(request.checked, filters[request.value])
}

/**
 * Toggle element visibility
 * @param {boolean} filter
 * @param {string} selector
 */
function toggleFilter (filter, selector) {
  var elements = document.querySelectorAll(selector)

  for (var i = 0, l = elements.length; i < l; ++i) {
    if (filter) elements[i].classList.add('hidden')
    else elements[i].classList.remove('hidden')
  }
}
