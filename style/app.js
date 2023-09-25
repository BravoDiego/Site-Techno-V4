var request = new XMLHttpRequest();

request.open('GET', '/header.html', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var resp = request.responseText;

    document.querySelector('header').innerHTML = resp;
  }
};

request.send();