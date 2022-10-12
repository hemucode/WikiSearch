// var core = {
//   "start": function () {
//     core.load();
//   },
//   "install": function () {
//     core.load();
//   },
//   "load": function () {
//     /*  */
//   }
// };

// app.popup.receive("support", function () {app.tab.open(app.homepage())});
// app.popup.receive("donation", function () {app.tab.open(app.homepage() + "?reason=support")});

// app.on.startup(core.start);
// app.on.installed(core.install);


// window.setTimeout(function () {
//   var version = config.welcome.version;
//   if (!version) {
//     app.tab.open(config.welcome.url);
//     config.welcome.version = app.version();
//   }
// }, config.welcome.timeout);

// window.setTimeout(function() {
//   app.context_menu.create("Search selection in " + "config.target.TOO.value", "selection", function (e) {
//     app.tab.open("https://" +  "WWW" + '.' + "config.target.TOO.value"  + '.org/w/index.php?search=' + e);
//   });
// }, 500);

  chrome.contextMenus.onClicked.addListener(function (info, tab) {
      if (info.menuItemId === "title1") {
       var searchstring = info.selectionText;
       chrome.tabs.create({url: "http://maps.google.com/maps?q=" + searchstring})
      }
  });


// app.options.receive("storageData", function () {
//   app.options.send("storageData", {
//     "toIndex": config.target.TO.index,
//     "toTypeIndex": config.target.TOO.index,
//   });
// });

// app.options.receive("TO", function (TO) {
//   config.target.TO.value = TO.value;
//   config.target.TO.index = TO.index;
// });

// app.options.receive("TOO", function (TOO) {
//   config.target.TOO.value = TOO.value;
//   config.target.TOO.index = TOO.index;
// });

// function searchgooglemaps(info)
// {
//  var searchstring = info.selectionText;
//  chrome.tabs.create({url: "http://maps.google.com/maps?q=" + searchstring})
// }

// chrome.contextMenus.create({title: "Search Google Maps", contexts:["selection"], onclick: searchgooglemaps});

// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//         title: "title",
//         contexts: ["selection"],
//         id: "titlex"
//     });
// });

// chrome.contextMenus.onClicked.addListener(function (info, tab) {
//     if (info.menuItemId === "titlex") {
//         let getToSite = "https://*" + info.selectionText
//         chrome.tabs.create({index: tab.index + 1, url: getQ, selected: true});
//     }
// })
