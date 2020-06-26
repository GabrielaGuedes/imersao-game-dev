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

  show(){
    image(this.image, this.coordinates.x, this.coordinates.y, this.width, this.height, this.matrix[this.currentFrame][0], 
      this.matrix[this.currentFrame][1], this.spriteWidth, this.spriteHeight); 
    this.animate();
  }

  move() {
    this.coordinates.x -= this.speed;

    if (this.coordinates.x < - this.width - this.delay) {
      this.coordinates.x = width;
    }
  }

  isBeingDisplayed() {
    return this.coordinates.x < width && this.coordinates.x > 0 && this.coordinates.y < height && this.coordinates.y > 0;
  }
}