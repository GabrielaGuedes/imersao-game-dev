class Game {
  constructor() {}

  setup() {
    gameSound.loop();
    this.scenario = new Scenario(scenarioImage, GAME_CONSTANTS.scenarioSpeed);
    this.score = new Score();
    this.life = new Life(GAME_CONSTANTS.totalLife, GAME_CONSTANTS.initialLife);
    this.collectibles = 0;
    this.character = new Character(
      CHARACTER_IMAGE_CONFIGS(),
      GAME_CONSTANTS.characterPosition
    );
    const plankton = new Enemy(PLANKTON_IMAGE_CONFIGS());
    const plankton2 = new Enemy(PLANKTON_IMAGE_CONFIGS());
    const plankton3 = new Enemy(PLANKTON_IMAGE_CONFIGS());
    this.collectibleGenerator = new CollectibleGenerator();
    this.enemySpawner = new EnemySpawner([plankton, plankton2, plankton3]);
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
    this.collectibleGenerator.draw();

    this._checkForCollision();
    this._checkForCollectibles();

    if (this.life.hearts === 0) {
      this._endGame();
    }
  }

  _checkForCollision() {
    this.enemySpawner.activeEnemies.forEach((enemy) => {
      if (this.character.isBeingDamagedBy(enemy)) {
        this._dealWithCollision();
      }
    });
  }

  _checkForCollectibles() {
    this.collectibleGenerator.displayedCollectibles.forEach((collectible) => {
      if (this.character.isCatching(collectible) && !collectible.collected) {
        collectible.collect();
        this.score.incrementScore();
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
