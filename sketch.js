const CHARACTER_IMAGE_FRAMES = 16;
const CHARACTER_WIDTH = 110;
const CHARACTER_HEIGHT = 135;
const CHARACTER_SPRITE_WIDTH = 220;
const CHARACTER_SPRITE_HEIGHT = 270;
const CHARACTER_IMAGE_FRAMES_COLUMNS = 4;
const ENEMY_IMAGE_FRAMES = 28;
const ENEMY_WIDTH = 52;
const ENEMY_HEIGHT = 52;
const ENEMY_SPRITE_WIDTH = 104;
const ENEMY_SPRITE_HEIGHT = 104;
const ENEMY_IMAGE_FRAMES_COLUMNS = 4;
const ENEMY_SPEED = 9;

let scenarioImage;
let characterImage;
let enemyImage;
let scenario;
let gameSound;
let jumpSound;
let character;
let enemy;
let scenarioSpeed = 3;

function preload() {
  scenarioImage = loadImage(IMAGE_PATHS.forestScenario);
  characterImage = loadImage(IMAGE_PATHS.runningCharacter);
  enemyImage = loadImage(IMAGE_PATHS.littleDropEnemy);
  gameSound = loadSound(SOUNDS_PATHS.gameTrack);
  jumpSound = loadSound(SOUNDS_PATHS.jump);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(GAME_CONSTANTS.frameRate);
  // gameSound.loop();
  scenario = new Scenario(scenarioImage, scenarioSpeed);
  character = new Character(
    CHARACTER_IMAGE_FRAMES, 
    characterImage, 
    0, 
    CHARACTER_WIDTH, 
    CHARACTER_HEIGHT, 
    CHARACTER_SPRITE_WIDTH, 
    CHARACTER_SPRITE_HEIGHT, 
    CHARACTER_IMAGE_FRAMES_COLUMNS);
  enemy = new Enemy(
    ENEMY_IMAGE_FRAMES, 
    enemyImage, 
    ENEMY_WIDTH, 
    ENEMY_HEIGHT, 
    ENEMY_SPRITE_WIDTH, 
    ENEMY_SPRITE_HEIGHT, 
    ENEMY_IMAGE_FRAMES_COLUMNS,
    ENEMY_SPEED);
}

function keyPressed(){
  if (key === 'ArrowUp'){
    character.jump(jumpSound); 
  }
}

function draw() {
  scenario.show();
  scenario.move();
  enemy.show();
  enemy.move();
  character.show();
  character.applyGravity();

  if (character.isColliding(enemy)) {
    noLoop();
  }
}


