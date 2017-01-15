var settings;

// load settings from local storage
chrome.storage.local.get(
  ['allowedDomainsRe', 'notAllowedDomainsRe'],
  function _processSettingsFromStorage(res) {
    settings = res;
  }
);

function isPageAllowedToProcess(pageUrl) {
  console.log('page ' + pageUrl + ' allowed to process');
  return true;
}

function onPageProcessed(pageData) {
  console.log('onPageProcessed', pageData);
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (isPageAllowedToProcess(tab.url)) {
    console.log(chrome.tabs.executeScript.toSource());
    chrome.tabs.executeScript(tabId, {file: 'content.js'}, onPageProcessed);
  } else {
    // Show PeARS page action if page is not allowed for user to be able to manually process page
    chrome.pageAction.show(tab.id);
  }
});

chrome.pageAction.onClicked.addListener(function () {
  var allowed = false;
  console.log('page action clicked');
});
