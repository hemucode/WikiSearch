var background = (function () {
  var _tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in _tmp) {
      if (_tmp[id] && (typeof _tmp[id] === "function")) {
        if (request.path === 'background-to-options') {
          if (request.method === id) _tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {_tmp[id] = callback},
    "send": function (id, data) {chrome.runtime.sendMessage({"path": 'options-to-background', "method": id, "data": data})}
  }
})();

background.receive("storageData", function (data) {
  if (data) {
    var TO = document.getElementById("TO");
    if (TO) {
      TO.selectedIndex = data.toIndex;
      TO.addEventListener("change", function (e) {
        var index = e.target.selectedIndex;
        var value = e.target[index].value;
        background.send("TO", {"index": index, "value": value});
      }, false);
    }
  }
});

var init = function () {
  background.send("storageData");
  window.removeEventListener("load", init, false);
};

window.addEventListener("load", init, false);
