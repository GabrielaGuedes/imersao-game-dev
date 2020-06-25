class Score {
  constructor() {
    this.score = 0;
  }

  show() {
    textAlign(RIGHT);
    fill(COLORS.white);
    textSize(50);
    text(parseInt(this.score), width - GAME_CONSTANTS.scoreMarginLeft, GAME_CONSTANTS.scoreMarginTop);
  }

  incrementScore() {
    this.score += 0.2;
  }
}