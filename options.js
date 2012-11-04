var options = {};

options.urls = {};

options.synced = false;
options.loaded = false;

options.populateUrls = function() {
  if (options.urls['blockedUrls']) {
    var blockedUrlsTextArea = document.getElementById('blockedUrls');
    blockedUrlsTextArea.value = options.urls['blockedUrls'].join('\n');
  }
  if (options.urls['redirectUrls']) {
    var redirectUrlsTextArea = document.getElementById('redirectUrls');
    redirectUrlsTextArea.value = options.urls['redirectUrls'].join('\n');
  }
};

options.saveUrls = function() {
  var blockedUrlsTextArea = document.getElementById('blockedUrls');
  options.urls['blockedUrls'] = blockedUrlsTextArea.value.split('\n');
  var redirectUrlsTextArea = document.getElementById('redirectUrls');
  options.urls['redirectUrls'] = redirectUrlsTextArea.value.split('\n');
  chrome.storage.sync.clear();
  chrome.storage.sync.set({'enola': options.urls});
};

options.init = function() {
  if (options.synced && options.loaded) {
    options.populateUrls();
    var saveButton = document.getElementById('save');
    saveButton.addEventListener('click', options.saveUrls, false);
  }
};

options.load = function() {
  options.loaded = true;
  options.init();
};

options.sync = function(urls) {
  options.urls = urls['enola'];
  options.synced = true;
  options.init();
};

options.run = function() {
  chrome.storage.sync.get('enola', options.sync);
  window.addEventListener('load', options.load, false);
};

options.run();
