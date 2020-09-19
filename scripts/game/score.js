class Score {
  constructor() {
    this.value = 0;
  }

  draw() {
    this.show();
  }

  show() {
    textAlign(RIGHT);
    fill(COLORS.blue);
    textSize(FONT_SIZES.score);
    text(parseInt(this.value), width - 50, 50);
  }

  incrementScore() {
    this.value++;
  }
}
