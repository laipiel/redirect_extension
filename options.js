var options = {};

options.urls = {};

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
  localStorage.setItem('enola', JSON.stringify(options.urls));
};

options.init = function() {
  options.populateUrls();
  var saveButton = document.getElementById('save');
  saveButton.addEventListener('click', options.saveUrls, false);
};

options.run = function() {
  var urls = localStorage.getItem('enola');
  if (urls) {
    options.urls = JSON.parse(urls);
  }
  window.addEventListener('load', options.init, false);
}

options.run();
