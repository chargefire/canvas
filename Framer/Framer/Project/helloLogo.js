var logo;

new BackgroundLayer({
  backgroundColor: "#151517"
});

logo = new Layer({
  width: 128,
  height: 128,
  image: "images/icon.png"
});

logo.center();

logo.states.add({
  second: {
    y: 200,
    scale: 1.5,
    rotation: 225
  },
  third: {
    y: 300,
    scale: 0.5,
    blur: 25
  }
});

logo.states.animationOptions = {
  curve: "spring(250,25,0)"
};

logo.on(Events.Click, function() {
  return logo.states.next();
});
