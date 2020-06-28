class ManagerButton {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
    this.button.mousePressed(() => this._changeScreen());
    this.button.addClass(CSS_CLASSES.startButton);
  }

  draw() {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }

  _changeScreen() {
    this.button.remove();
    currentScreen = SCREENS.game;
  }
}