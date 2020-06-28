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
    character = new Character(
      CHARACTER_IMAGE_FRAMES, 
      characterImage, 
      0, 
      CHARACTER_WIDTH, 
      CHARACTER_HEIGHT, 
      CHARACTER_SPRITE_WIDTH, 
      CHARACTER_SPRITE_HEIGHT, 
      CHARACTER_IMAGE_FRAMES_COLUMNS);
    const littleDrop = new Enemy(
      LITTLE_DROP_IMAGE_FRAMES, 
      littleDropImage, 
      LITTLE_DROP_WIDTH, 
      LITTLE_DROP_HEIGHT, 
      LITTLE_DROP_SPRITE_WIDTH, 
      LITTLE_DROP_SPRITE_HEIGHT, 
      LITTLE_DROP_IMAGE_FRAMES_COLUMNS,
      LITTLE_DROP_SPEED);
    const troll = new Enemy(
      TROLL_IMAGE_FRAMES, 
      trollImage, 
      TROLL_WIDTH, 
      TROLL_HEIGHT, 
      TROLL_SPRITE_WIDTH, 
      TROLL_SPRITE_HEIGHT, 
      TROLL_IMAGE_FRAMES_COLUMNS,
      TROLL_SPEED
    );
    const flyingEnemy = new Enemy(
      FLYING_ENEMY_IMAGE_FRAMES, 
      flyingEnemyImage, 
      FLYING_ENEMY_WIDTH, 
      FLYING_ENEMY_HEIGHT, 
      FLYING_ENEMY_SPRITE_WIDTH, 
      FLYING_ENEMY_SPRITE_HEIGHT, 
      FLYING_ENEMY_IMAGE_FRAMES_COLUMNS,
      FLYING_ENEMY_SPEED
    );

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
    const visibleEnemy = enemy.coordinates.x < - enemy.width;
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