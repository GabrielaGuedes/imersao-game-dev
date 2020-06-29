class Game {
  constructor() {
    this.currentIndex = 0;
    this.map = [
      {
        enemy: 0,
        speed: 10
      },
      {
        enemy: 1,
        speed: 30
      },
      {
        enemy: 2,
        speed: 40
      }
    ]
  }

  setup() {
    gameSound.loop();
    this.scenario = new Scenario(scenarioImage, scenarioSpeed);
    this.score = new Score();
    this.life = new Life(GAME_CONSTANTS.totalLife, GAME_CONSTANTS.initialLife);
    this.character = new Character(CHARACTER_IMAGE_CONFIGS(), 0);
    const littleDrop = new Enemy(LITTLE_DROP_IMAGE_CONFIGS(), LITTLE_DROP_SPEED);
    const troll = new Enemy(TROLL_IMAGE_CONFIGS(), TROLL_SPEED);
    const flyingEnemy = new Enemy(FLYING_ENEMY_IMAGE_CONFIGS(), FLYING_ENEMY_SPEED);

    this.enemies = [littleDrop, troll, flyingEnemy];
  }

  keyPressed(key) {
    if (key === 'ArrowUp'){
      this.character.jump(jumpSound); 
    }
  }

  draw(){
    this.scenario.show();
    this.scenario.move();
    this.score.show();
    this.score.incrementScore();
    this.character.show();
    this.character.applyGravity();
    this.life.draw();
  
    const currentLine = this.map[this.currentIndex];
    const enemy = this.enemies[currentLine.enemy];
    const visibleEnemy = enemy.x < - enemy.width;
    enemy.speed = currentLine.speed;
    
    enemy.show();
    enemy.move();
  
    if (visibleEnemy) {
      this.currentIndex++;
      enemy.appear();
      if(this.currentIndex >= this.map.length) {
        this.currentIndex = 0;
      }
    }
    
  
    if (this.character.isColliding(enemy)) {
      this.life.lostLife();
      this.character.becomeTemporallyInvencible();
    }

    if(this.life.lifes === 0) {
      noLoop();
      this.gameOver = new GameOver(gameOverImage, GAME_CONSTANTS.gameOverImageWidth, GAME_CONSTANTS.gameOverImageHeight);
      this.gameOver.display();
    }
  }
}