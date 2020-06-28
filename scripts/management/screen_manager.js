class ScreenManager {
  constructor() {
    this.initialScreen = new InitialScreen(this.handleStartClick.bind(this));
    this.gameScreen = new Game();
  }

  setup() {
    this.currentScreen = this.initialScreen;
  }

  draw() {
    this.currentScreen.draw();
  }

  keyPressed(key) {
    this.currentScreen.keyPressed(key);
  }

  handleStartClick() {
    this.currentScreen = this.gameScreen;
    this.gameScreen.setup();
  }
}