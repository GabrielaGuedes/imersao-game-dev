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
    scenario = new Scenario(scenarioImage, scenarioSpeed);
    score = new Score();
    life = new Life(GAME_CONSTANTS.totalLife, GAME_CONSTANTS.initialLife);
    character = new Character(CHARACTER_IMAGE_CONFIGS(), 0);
    const littleDrop = new Enemy(LITTLE_DROP_IMAGE_CONFIGS(), LITTLE_DROP_SPEED);
    const troll = new Enemy(TROLL_IMAGE_CONFIGS(), TROLL_SPEED);
    const flyingEnemy = new Enemy(FLYING_ENEMY_IMAGE_CONFIGS(), FLYING_ENEMY_SPEED);

    enemies.push(littleDrop, troll, flyingEnemy);

    enemySpawner = new EnemySpawner(enemies);
  }

  keyPressed(key) {
    if (key === 'ArrowUp'){
      character.jump(jumpSound); 
    }
  }

  draw(){
    scenario.show();
    scenario.move();
    score.show();
    score.incrementScore();
    character.show();
    character.applyGravity();
    life.draw();
  
    const currentLine = this.map[this.currentIndex];
    const enemy = enemies[currentLine.enemy];
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
    
  
    if (character.isColliding(enemy)) {
      life.lostLife();
      character.becomeTemporallyInvencible();
    }

    if(life.lifes === 0) {
      noLoop();
      gameOver = new GameOver(gameOverImage, GAME_CONSTANTS.gameOverImageWidth, GAME_CONSTANTS.gameOverImageHeight);
      gameOver.display();
    }
  }
}