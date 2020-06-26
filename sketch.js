function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(GAME_CONSTANTS.frameRate);
  // gameSound.loop();

  game = new Game();
  initialScreen = new InitialScreen();
  game.setup();
  scenes = {
    game,
    initialScreen
  }
  managerButton = new ManagerButton('Start', width/2, height/2);
}

function keyPressed(){
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}
