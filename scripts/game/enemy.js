const DEFAULT_SPEED = 10;
class Enemy extends Animation {
  constructor(imageConfigs, x) {
    super(imageConfigs, x);

    this.speed = DEFAULT_SPEED;
    this.x = width;
  }

  draw() {
    this.show();
    this.move();
  }

  show(){
    image(this.image, this.x, this.y, this.width, this.height, this.matrix[this.currentFrame][0], 
      this.matrix[this.currentFrame][1], this.spriteWidth, this.spriteHeight); 
    this.animate();
  }

  move() {
    this.x -= this.speed;
  }

  appear() {
    this.x = width;
  }

  isBeingDisplayed() {
    return this.x < width && this.x > 0 && this.y < height && this.y > 0;
  }
}