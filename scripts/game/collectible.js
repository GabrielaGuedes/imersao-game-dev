class Collectible extends Animation {
  constructor(imageConfigs, x, y) {
    super(imageConfigs, x, y);

    this.speed = GAME_CONSTANTS.scenarioSpeed;
  }

  draw() {
    this.show();
    this.move();
  }

  move() {
    this.x -= this.speed;
  }
}
