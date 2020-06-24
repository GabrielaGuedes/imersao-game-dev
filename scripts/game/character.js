const JUMP_SIZE = 30;

class Character extends Animation {
  constructor(
    imageFrames, 
    image, 
    x, 
    objectWidth, 
    objectHeight, 
    spriteWidth,
    spriteHeight, 
    frameColumns
  ) {
    super(
      imageFrames, 
      image, 
      x, 
      objectWidth, 
      objectHeight, 
      spriteWidth,
      spriteHeight, 
      frameColumns
    );

    this.initialY = height - this.height;
    this.coordinates.y = this.initialY;
    this.jumpSpeed = 0;
    this.recentSingleJump = false;
  }

  jump(sound) {
    if (this.canJump()) {
      this.jumpSpeed = -JUMP_SIZE;
      this.recentSingleJump = !this.recentSingleJump;
      sound.play();
    }
  }

  canJump() {
    return this.coordinates.y === this.initialY || this.recentSingleJump;
  }

  applyGravity() {
    this.coordinates.y += this.jumpSpeed;
    this.jumpSpeed += GAME_CONSTANTS.gravity;

    this.useFloorAsLimit();
  }

  useFloorAsLimit() {
    if(this.coordinates.y > this.initialY) {
      this.coordinates.y = this.initialY;
    }
  }

  isColliding(enemy) {
    const precision = GAME_CONSTANTS.precision;
    return collideRectRect(this.coordinates.x, this.coordinates.y, this.width*precision, this.height*precision,
      enemy.coordinates.x, enemy.coordinates.y, enemy.width*precision, enemy.height*precision);    
  }
}