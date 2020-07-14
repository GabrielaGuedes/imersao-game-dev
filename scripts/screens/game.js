class Game {
  constructor() {}

  setup() {
    gameSound.loop();
    this.scenario = new Scenario(scenarioImage, GAME_CONSTANTS.scenarioSpeed);
    this.score = new Score();
    this.life = new Life(GAME_CONSTANTS.totalLife, GAME_CONSTANTS.initialLife);
    this.character = new Character(
      CHARACTER_IMAGE_CONFIGS(),
      GAME_CONSTANTS.characterPosition
    );
    const plankton = new Enemy(PLANKTON_IMAGE_CONFIGS());
    const squidward = new Enemy(SQUIDWARD_IMAGE_CONFIGS());
    const boat = new Enemy(BOAT_IMAGE_CONFIGS());
    this.enemySpawner = new EnemySpawner([plankton, squidward, boat]);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      this.character.jump(jumpSound);
    }
  }

  draw() {
    this.scenario.draw();
    this.score.draw();
    this.life.draw();
    this.character.draw();
    this.enemySpawner.draw();

    this._checkForCollision();

    if (this.life.hearts === 0) {
      this._endGame();
    }
  }

  _checkForCollision() {
    this.enemySpawner.activeEnemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this._dealWithCollision();
      }
    });
  }

  _dealWithCollision() {
    this.life.lostLife();
    this.character.becomeTemporallyInvencible();
  }

  _endGame() {
    noLoop();
    this.gameOver = new GameOver(
      gameOverImage,
      GAME_CONSTANTS.gameOverImageWidth,
      GAME_CONSTANTS.gameOverImageHeight
    );
    this.gameOver.display();
  }
}
