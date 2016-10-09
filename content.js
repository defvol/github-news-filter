const filters = {
  issues: '[class*=issues_]',
  push: '[class*=push]'
}

// TODO: use chrome.storage
var state = Object.assign({}, filters)
var initState = () => Object.keys(state).forEach(s => state[s] = false)

initState()
registerListeners()

/**
 * Register listeners for
 * - DOM updates (i.e. more content loaded)
 * - messages from the extension menu
 */
function registerListeners () {
  var config = { attributes: true, childList: true, characterData: true }
  var news = document.querySelector('div.news')
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(m => m.type === 'childList' ? moreListener() : null)
  })

  observer.observe(news, config)
  chrome.runtime.onMessage.addListener(clickListener)
}

/**
 * Run filter when message from browser extension is received
 * Also save state
 */
function clickListener (request, sender, sendResponse) {
  state[request.value] = request.checked
  toggleFilter(request.checked, filters[request.value])
}

/**
 * Run filters when DOM mutates after a 'more' button click
 */
function moreListener () {
  Object.keys(state).forEach(s => toggleFilter(state[s], filters[s]))
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
