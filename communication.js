chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse({urls: localStorage.getItem('enola')});
  });
