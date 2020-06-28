let screenManager;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(GAME_CONSTANTS.frameRate);

  screenManager = new ScreenManager();
  screenManager.setup();
}

function keyPressed(){
  screenManager.keyPressed(key);
}

function draw() {
  screenManager.draw();
}
