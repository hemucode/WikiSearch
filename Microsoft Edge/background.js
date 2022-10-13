importScripts("lib/config.js");
importScripts("lib/chrome.js");
importScripts("lib/runtime.js");
importScripts("lib/common.js");
// function searchgooglemaps(info)
// {
//  var searchstring = info.selectionText;
//  chrome.tabs.create({url: "http://maps.google.com/maps?q=" + searchstring})
// }

// chrome.contextMenus.create({title: "Search Google Maps", contexts:["selection"], onclick: searchgooglemaps});

// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//         title: "google",
//         contexts: ["selection"],
//         id: "title1"
//     });
// });

// chrome.contextMenus.onClicked.addListener(function (info, tab) {
//     if (info.id === "title1") {
// 		 var searchstring = info.selectionText;
// 		 chrome.tabs.create({url: "http://maps.google.com/maps?q=" + searchstring})
//     }
// })



