class Record {
  draw() {
    this.showRecord();
  }

  showRecord() {
    textAlign(RIGHT);
    fill(COLORS.aquaBlue);
    textSize(FONT_SIZES.score);
    text(this.recordText(), (6 * width) / 7, 50);
  }

  recordText() {
    return `Record: ${record}`;
  }
}
