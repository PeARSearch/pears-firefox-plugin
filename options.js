function saveOptions(e) {
  chrome.storage.local.set({
    allowedDomainsRe: document.querySelector('#allowed').value,
    notAllowedDomainsRe: document.querySelector('#not-allowed').value,
  });
}


function restoreOptions() {
  chrome.storage.local.get(
    ['allowedDomainsRe', 'notAllowedDomainsRe'],
    function _restoreOptions(res) {
      document.querySelector('#allowed').value = res.allowedDomainsRe || '';
      document.querySelector('#not-allowed').value = res.notAllowedDomainsRe || '';
    }
  );
}


document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
