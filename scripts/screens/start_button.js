class StartButton {
  constructor(text, x, y, handleStartClick) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
    this.handleStartClick = handleStartClick;
    this.button.mousePressed(() => this._onStartClick());
    this.button.addClass(CSS_CLASSES.startButton);
  }

  draw() {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }

  _onStartClick() {
    this.handleStartClick();
    this.button.remove();
  }
}