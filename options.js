var urls = {
  'blockedUrls': [
    'http://www.naver.com',
    'http://www.daum.net'
  ],
  'redirectUrls': [
    'http://www.theglobeandmail.com',
    'http://www.economist.com',
    'http://www.thestar.com',
    'http://www.nationalpost.com'
  ]
};

localStorage.setItem('enola', JSON.stringify(urls));
