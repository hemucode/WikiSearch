domReady(() => {
  linkButton()
  hoverButton()
  translateHTML()
})

function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}

function translateHTML (dataKey = 'message') {
  for (const $element of document.getElementsByTagName('*')) {
    if ($element.dataset && $element.dataset[dataKey]) {
      $element.innerText = chrome.i18n.getMessage($element.dataset[dataKey])
    }
  }
}
function linkButton() {
  document.querySelector('.teaser').href = `https://microsoftedge.microsoft.com/addons/detail/wikisearch/${chrome.runtime.id}/reviews`;
  document.querySelector('.youtube').href = `https://youtube.com/c/HemantaGayen`;
  document.querySelector('.facebook').href = `https://www.facebook.com/codehemu/`;
  document.querySelector('.website').href = `https://www.downloadhub.cloud/2022/09/wikisearch-browser.html`;
}

function hoverButton(){
  document.querySelector(".div_myadblock").addEventListener("mouseover" , mouseOver);
  document.querySelector(".div_myadblock").addEventListener("mouseout" , mouseOut);
  document.querySelector(".cta-description").addEventListener("click", linkopen);
  document.querySelector(".cta-close").addEventListener("click", messageclose);
  document.querySelector("#header-icons").addEventListener("click", headericons);
  if (localStorage.block=="block") {
    document.querySelector(".div_myadblock").style.display="none";
  }

}  
function mouseOver() {
  if (localStorage.message=="nyancat") {
    document.querySelector(".cta-message").innerText="Install YouTube Nyan Cat";
    document.querySelector(".div_myadblock").style.background="#a900ff";
  }else{
    document.querySelector(".cta-message").innerText="Install YouTube Theme";
    document.querySelector(".div_myadblock").style.background="#0047ff";
  }
    
    document.querySelector(".cta-close").style.display="block";
} 

function mouseOut() {
    document.querySelector(".cta-message").innerText="Upgrade your YouTube";
    document.querySelector(".cta-close").style.display="none";
    document.querySelector(".div_myadblock").style.background="#fff";
}

function linkopen(){
  if (localStorage.message=="nyancat") {
    window.open("https://www.codehemu.com/p/nyancat.html",'_blank');
  }else{
    window.open("https://www.codehemu.com/p/mytubeforyoutube.html",'_blank');
  }

}

function messageclose(){
  if (localStorage.message=="nyancat") {
    localStorage.setItem("block", "block");
  }
  document.querySelector(".div_myadblock").style.display="none";
  localStorage.setItem("message", "nyancat");
}
function headericons(){
    window.open("hhttps://www.downloadhub.cloud/2022/09/wikisearch-browser.html#CSS2",'_blank');
}


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

    var TOO = document.getElementById("TOO");
    if (TOO) {
      TOO.selectedIndex = data.toTypeIndex;
      TOO.addEventListener("change", function (e) {
        var index = e.target.selectedIndex;
        var value = e.target[index].value;
        background.send("TOO", {"index": index, "value": value});
      }, false);
    }
  }
});

var init = function () {
  background.send("storageData");
  window.removeEventListener("load", init, false);
};

window.addEventListener("load", init, false);