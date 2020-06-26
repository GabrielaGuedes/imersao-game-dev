class Game {
  constructor() {
    this.currentEnemy = 0;
  }

  setup() {
    scenario = new Scenario(scenarioImage, scenarioSpeed);
    score = new Score();
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
      LITTLE_DROP_SPEED,
      300);
    const troll = new Enemy(
      TROLL_IMAGE_FRAMES, 
      trollImage, 
      TROLL_WIDTH, 
      TROLL_HEIGHT, 
      TROLL_SPRITE_WIDTH, 
      TROLL_SPRITE_HEIGHT, 
      TROLL_IMAGE_FRAMES_COLUMNS,
      TROLL_SPEED,
      500
    );
    const flyingEnemy = new Enemy(
      FLYING_ENEMY_IMAGE_FRAMES, 
      flyingEnemyImage, 
      FLYING_ENEMY_WIDTH, 
      FLYING_ENEMY_HEIGHT, 
      FLYING_ENEMY_SPRITE_WIDTH, 
      FLYING_ENEMY_SPRITE_HEIGHT, 
      FLYING_ENEMY_IMAGE_FRAMES_COLUMNS,
      FLYING_ENEMY_SPEED,
      500
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
  
    // if (enemySpawner.spawnEnemy()) {
    //   enemyToBorn = enemySpawner.spawnEnemy();
    // }
    // if (enemyToBorn) {
    //   enemyToBorn.show();
    //   enemyToBorn.move();
    // }
  
    const enemy = enemies[this.currentEnemy];
    const visibleEnemy = enemy.coordinates.x < - enemy.width;
    
    enemy.show();
    enemy.move();
  
    if (visibleEnemy) {
      this.currentEnemy++;
      if(this.currentEnemy >= enemies.length) {
        this.currentEnemy = 0;
      }
      enemy.speed = parseInt(random(10,30));
    }
    
  
    if (character.isColliding(enemy)) {
      noLoop();
      gameOver = new GameOver(gameOverImage, GAME_CONSTANTS.gameOverImageWidth, GAME_CONSTANTS.gameOverImageHeight);
      gameOver.display();
    }
  }
}