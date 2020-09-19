class Collectible extends Animation {
  constructor(imageConfigs, x, special = false) {
    super(imageConfigs, x, Math.floor(Math.random() * 300));

    this.special = special;
    this.speed = GAME_CONSTANTS.scenarioSpeed;
    this.collected = false;
  }

  draw() {
    if (!this.collected) {
      this.show();
      this.move();
    }
  }

  move() {
    this.x -= this.speed;

    if (this.x < -this.width) {
      this.x = width;
    }
  }

  collect() {
    this.collected = true;
  }
}
