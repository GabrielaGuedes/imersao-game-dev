class Game {
  constructor() {}

  setup() {
    gameSound.loop();
    this.scenario = new Scenario(scenarioImage, scenarioSpeed);
    this.score = new Score();
    this.life = new Life(GAME_CONSTANTS.totalLife, GAME_CONSTANTS.initialLife);
    this.character = new Character(CHARACTER_IMAGE_CONFIGS(), 10);
    const littleDrop = new Enemy(LITTLE_DROP_IMAGE_CONFIGS());
    const troll = new Enemy(TROLL_IMAGE_CONFIGS());
    const flyingEnemy = new Enemy(FLYING_ENEMY_IMAGE_CONFIGS());
    this.enemySpawner = new EnemySpawner([littleDrop, troll, flyingEnemy]);
  }

  keyPressed(key) {
    if (key === 'ArrowUp'){
      this.character.jump(jumpSound); 
    }
  }

  draw(){
    this.scenario.draw();
    this.score.draw();
    this.life.draw();
    this.character.draw();
    this.enemySpawner.draw();
    
    if (this.character.isColliding(this.enemySpawner.currentEnemy())) {
      this._dealWithCollision();
    }
    
    if(this.life.hearts === 0) {
      this._endGame();
    }
  }

  _dealWithCollision() {
    this.life.lostLife();
    this.character.becomeTemporallyInvencible();    
  }

  _endGame() {
    noLoop();
    this.gameOver = new GameOver(gameOverImage, GAME_CONSTANTS.gameOverImageWidth, GAME_CONSTANTS.gameOverImageHeight);
    this.gameOver.display();
  }
}