window.setTimeout(function () {
  var version = config.welcome.version;
  if (!version) {
    app.tab.open(config.welcome.url);
    config.welcome.version = app.version();
  }
}, config.welcome.timeout);

// Copyright (c) 2022 Hemanta Gayen

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

window.setTimeout(function() {
  app.context_menu.create("Search selection in " + config.target.TOO.value, "selection", function (e) {
    app.tab.open("https://" +  config.target.TO.value + '.' + config.target.TOO.value  + '.org/w/index.php?search=' + e);
  });
}, 500);

app.options.receive("storageData", function () {
  app.options.send("storageData", {
    "toIndex": config.target.TO.index,
    "toTypeIndex": config.target.TOO.index,
  });
});

app.options.receive("TO", function (TO) {
  config.target.TO.value = TO.value;
  config.target.TO.index = TO.index;
});

app.options.receive("TOO", function (TOO) {
  config.target.TOO.value = TOO.value;
  config.target.TOO.index = TOO.index;
});
