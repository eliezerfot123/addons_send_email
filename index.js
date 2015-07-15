var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./images/icon_16.png",
    "32": "./images/icon_32.png",
    "64": "./images/icon_64.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  onHide: handleHide,
  width:512,
  height: 760
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}
