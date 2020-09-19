class GameOver {
  constructor(handleRestart) {
    this.startButton = new StartButton(
      "Play again",
      width / 2,
      height / 2,
      handleRestart
    );
  }

  draw() {
    this._text();
    this._button();
  }

  _text() {
    textFont(spongeBobFont);
    textSize(FONT_SIZES.gameOver);
    textAlign(CENTER);
    fill("#FFF56C");
    text("Game Over", width / 2, height / 2);
  }

  _button() {
    this.startButton.y = (height / 7) * 5;
    this.startButton.draw();
  }
}
