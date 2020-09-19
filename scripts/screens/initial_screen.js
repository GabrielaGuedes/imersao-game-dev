class InitialScreen {
  constructor(handleStartClick) {
    this.startButton = new StartButton(
      "Start",
      width / 2,
      height / 2,
      handleStartClick
    );
  }

  draw() {
    this._backgroundImage();
    this._text();
    this._button();
  }

  keyPressed(key) {}

  _backgroundImage() {
    image(initialScreenImage, 0, 0, width, height);
  }

  _text() {
    textFont(spongeBobFont);
    textSize(FONT_SIZES.gameTitle);
    textAlign(CENTER);
    fill(COLORS.blue);
    text("Spongebob in", width / 2, height / 2);
    text("Jellyfishing", width / 2, height / 2 + FONT_SIZES.gameTitle);
  }

  _button() {
    this.startButton.y = (height / 7) * 5;
    this.startButton.draw();
  }
}
