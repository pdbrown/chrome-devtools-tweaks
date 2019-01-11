var xhr = new XMLHttpRequest();
xhr.open("GET", "/main.css", false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);
