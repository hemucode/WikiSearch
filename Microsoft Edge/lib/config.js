var config = {};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
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
