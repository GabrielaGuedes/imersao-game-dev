let scenarioImage;
let characterImage;
let scenario;
let gameSound;
let character;

function preload() {
  scenarioImage = loadImage('images/scenario/forest.png');
  characterImage = loadImage('images/character/running.png');
  gameSound = loadSound('sounds/game_track.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  frameRate(40);
  gameSound.loop();
  character = new Character(characterImage);
}

function draw() {
  scenario.show();
  scenario.move();
  character.show();
 
}


