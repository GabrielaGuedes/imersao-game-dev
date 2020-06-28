const DEFAULT_JUMP_SIZE = 30;

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

    this.initialY = height - this.height - GAME_CONSTANTS.floorHeight;
    this.coordinates.y = this.initialY;
    this.jumpSpeed = 0;
    this.jumpHeight = -DEFAULT_JUMP_SIZE;
    this.recentSingleJump = false;
    this.isInvencible = false;
  }

  jump(sound) {
    if (this._canJump()) {
      this.jumpSpeed = this.jumpHeight;
      this.recentSingleJump = !this.recentSingleJump;
      sound.play();
    }
  }

  applyGravity() {
    this.coordinates.y += this.jumpSpeed;
    this.jumpSpeed += GAME_CONSTANTS.gravity;
    
    this._resetJump();
    this._useFloorAsLimit();
  }

  isColliding(enemy) {
    if (!this.isInvencible) {
      return collidePolyPoly(this.polygonFrame(), enemy.polygonFrame());
    }
  }

  becomeTemporallyInvencible(){
    this.isInvencible = true;
    setTimeout(() => { 
      this.isInvencible = false
    }, 1000)
  }

  _canJump() {
    return this.coordinates.y === this.initialY || this.recentSingleJump;
  }

  _resetJump() {
    if(this.coordinates.y >= this.initialY) {
      this.recentSingleJump = false;
    }
  }

  _useFloorAsLimit() {
    if(this.coordinates.y > this.initialY) {
      this.coordinates.y = this.initialY;
    }
  }
}