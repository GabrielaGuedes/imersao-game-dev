class ScreenManager {
  setup() {
    this.initialScreen = new InitialScreen(this.handleStartClick.bind(this));
    this.recordDisplay = new Record();
    this.currentScreen = this.initialScreen;
    this._setGame();
  }

  draw() {
    this.currentScreen.draw();
    if (this.inGame) {
      this.recordDisplay.draw();
    }
  }

  keyPressed(key) {
    this.currentScreen.keyPressed(key);
  }

  handleStartClick() {
    this.inGame = true;
    this.currentScreen = this.gameScreen;
    this.gameScreen.setup();
  }

  handleGameOver() {
    this.gameOver = new GameOver(this.handleRestart.bind(this));
    this.currentScreen = this.gameOver;
  }

  handleRestart() {
    this._setGame();
    this.handleStartClick();
  }

  _setGame() {
    this.gameScreen = new Game(this.handleGameOver.bind(this));
  }
}
