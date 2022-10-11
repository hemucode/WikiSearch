var config = {};

config.welcome = {
  "timeout": 3000,
  get version () {return app.storage.read('version')},
  set version (val) {app.storage.write('version', val)},
  "url": "https://www.downloadhub.cloud/2022/09/wikisearch-browser.html"
};

config.target = {
  "TO": {
    set value (val) {app.storage.write("target-to-value", val)},
    set index (val) {app.storage.write("target-to-index", val + '')},
    get value () {return app.storage.read("target-to-value") || "en"},
    get index () {return parseInt(app.storage.read("target-to-index") || "16")}
  },
  "TOO": {
    set value (val) {app.storage.write("target-to-name", val)},
    set index (val) {app.storage.write("target-to-path", val + '')},
    get value () {return app.storage.read("target-to-name") || "wikipedia"},
    get index () {return parseInt(app.storage.read("target-to-path") || "0")}
  }
};
