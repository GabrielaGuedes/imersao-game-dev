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

let initialScreenFont;
let scenarioImage;
let initialScreenImage;
let characterImage;
let enemyImage;
let gameOverImage;
let heartImage;
let scenario;
let gameSound;
let jumpSound;
let character;
let scenarioSpeed = 5;
let score;
let enemySpawner;
let game;
let gameOver;
let currentScene = SCENES.initialScreen;
let initialScreen;
let managerButton;
let life;

const enemies = [];
