class Score {
  constructor() {
    this.score = 0;
  }

  draw() {
    this.show();
  }

  show() {
    textAlign(RIGHT);
    fill(COLORS.white);
    textSize(FONT_SIZES.score);
    text(parseInt(this.score), width - 30, 50);
  }

  incrementScore() {
    this.score++;
  }
}
