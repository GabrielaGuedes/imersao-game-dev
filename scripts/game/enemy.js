class Enemy extends Animation {
  constructor(
    imageFrames, 
    image, 
    objectWidth, 
    objectHeight, 
    spriteWidth, 
    spriteHeight, 
    frameColumns, 
    speed
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
  }

  move() {
    this.coordinates.x -= this.speed;

    if (this.coordinates.x < - this.width) {
      this.coordinates.x = width;
    }
  }
}