const CHARACTER_IMAGE_FRAMES = 16;
const CHARACTER_WIDTH = 110;
const CHARACTER_HEIGHT = 135;
const CHARACTER_SPRITE_WIDTH = 220;
const CHARACTER_SPRITE_HEIGHT = 270;
const CHARACTER_IMAGE_FRAMES_COLUMNS = 4;

const LITTLE_DROP_IMAGE_FRAMES = 28;
const LITTLE_DROP_WIDTH = 52;
const LITTLE_DROP_HEIGHT = 52;
const LITTLE_DROP_SPRITE_WIDTH = 104;
const LITTLE_DROP_SPRITE_HEIGHT = 104;
const LITTLE_DROP_IMAGE_FRAMES_COLUMNS = 4;
const LITTLE_DROP_SPEED = 10;

const TROLL_IMAGE_FRAMES = 28;
const TROLL_WIDTH = 200;
const TROLL_HEIGHT = 200;
const TROLL_SPRITE_WIDTH = 400;
const TROLL_SPRITE_HEIGHT = 400;
const TROLL_IMAGE_FRAMES_COLUMNS = 5;
const TROLL_SPEED = 10;

const FLYING_ENEMY_IMAGE_FRAMES = 16;
const FLYING_ENEMY_WIDTH = 100;
const FLYING_ENEMY_HEIGHT = 75;
const FLYING_ENEMY_SPRITE_WIDTH = 200;
const FLYING_ENEMY_SPRITE_HEIGHT = 150;
const FLYING_ENEMY_IMAGE_FRAMES_COLUMNS = 3;
const FLYING_ENEMY_SPEED = 10;

let scenarioImage;
let characterImage;
let enemyImage;
let gameOverImage;
let scenario;
let gameSound;
let jumpSound;
let character;
let scenarioSpeed = 5;
let score;

const enemies = [];

function preload() {
  scenarioImage = loadImage(IMAGE_PATHS.forestScenario);
  characterImage = loadImage(IMAGE_PATHS.runningCharacter);
  littleDropImage = loadImage(IMAGE_PATHS.littleDropEnemy);
  trollImage = loadImage(IMAGE_PATHS.trollEnemy);
  flyingEnemyImage = loadImage(IMAGE_PATHS.flyingDropEnemy);
  gameOverImage = loadImage(IMAGE_PATHS.gameOver);
  gameSound = loadSound(SOUNDS_PATHS.gameTrack);
  jumpSound = loadSound(SOUNDS_PATHS.jump);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(GAME_CONSTANTS.frameRate);
  // gameSound.loop();
 
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

  // enemies.push(littleDrop, troll, flyingEnemy);
  enemies.push(troll);
  enemies.push(littleDrop);
}

function keyPressed(){
  if (key === 'ArrowUp'){
    character.jump(jumpSound); 
  }
}

function draw() {
  scenario.show();
  scenario.move();
  score.show();
  score.incrementScore();
  character.show();
  character.applyGravity();

  enemies.forEach(enemy => {
    enemy.show();
    enemy.move();
    if (character.isColliding(enemy)) {
      noLoop();
      gameOver = new GameOver(gameOverImage, GAME_CONSTANTS.gameOverImageWidth, GAME_CONSTANTS.gameOverImageHeight);
      gameOver.display();
    }
  })
}
