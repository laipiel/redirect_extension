chrome.storage.sync.get('enola', function(items) {
  var urls = items['enola'];
  var redirected = false;
  var blockedUrls = urls['blockedUrls'];
  for (var i = 0, blockedUrl; blockedUrl = blockedUrls[i++];) {
    if (window.location.href.toLowerCase().indexOf(
        blockedUrl.toLowerCase()) >= 0) {
      redirected = true;
      break;
    }
  }
  if (redirected) {
    var redirectUrls = urls['redirectUrls'];
    var index = Math.floor(Math.random() * redirectUrls.length);
    window.location.href = redirectUrls[index];
  }
});
