class Enemy extends Animation {
  constructor(
    imageFrames, 
    image, 
    objectWidth, 
    objectHeight, 
    spriteWidth, 
    spriteHeight, 
    frameColumns, 
    speed,
    delay
  ) {
    super(
      imageFrames, 
      image, 
      width - objectWidth, 
      objectWidth, 
      objectHeight, 
      spriteWidth, 
      spriteHeight, 
      frameColumns
    );
    this.speed = speed;
    this.delay = delay;
    this.coordinates.x = width + this.delay;
  }

  move() {
    this.coordinates.x -= this.speed;

    if (this.coordinates.x < - this.width - this.delay) {
      this.coordinates.x = width;
    }
  }
}