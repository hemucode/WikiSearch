var core = {
  "start": function () {
    core.load();
  },
  "install": function () {
    core.load();
  },
  "load": function () {
    /*  */
  }
};

app.popup.receive("support", function () {app.tab.open(app.homepage())});
app.popup.receive("donation", function () {app.tab.open(app.homepage() + "?reason=support")});

app.on.startup(core.start);
app.on.installed(core.install);


chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: "Search selection in " + config.target.TOO.value,
        contexts: ["selection"],
        id: "titlecodehemu"
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "titlecodehemu") {
    var searchstring = info.selectionText;
    chrome.tabs.create({url: "https://" +  config.target.TO.value + '.' + config.target.TOO.value  + '.org/w/index.php?search=' + searchstring})
    }
})

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
