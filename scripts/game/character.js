const DEFAULT_JUMP_SIZE = 30;

class Character extends Animation {
  constructor(imageConfigs, x) {
    super(imageConfigs, x);

    this.initialY = height - this.height - GAME_CONSTANTS.floorHeight;
    this.y = this.initialY;
    this.jumpSpeed = 0;
    this.jumpHeight = -DEFAULT_JUMP_SIZE;
    this.recentSingleJump = false;
    this.isInvencible = false;
  }

  draw() {
    this.show();
    this.applyGravity();

    if (this.isInvencible) {
      this.draw_invencible_marker();
    }
  }

  jump(sound) {
    if (this._canJump()) {
      this.jumpSpeed = this.jumpHeight;
      this.recentSingleJump = !this.recentSingleJump;
      sound.play();
    }
  }

  applyGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += GAME_CONSTANTS.gravity;

    this._resetJump();
    this._useFloorAsLimit();
  }

  isColliding(enemy) {
    if (!this.isInvencible) {
      return collidePolyPoly(this.polygonFrame(), enemy.polygonFrame());
    }
  }

  becomeTemporallyInvencible() {
    this.isInvencible = true;
    setTimeout(() => {
      this.isInvencible = false;
    }, 1000);
  }

  draw_invencible_marker() {
    fill(255, 10, 10, 127);
    circle(
      this.x + this.width / 2,
      this.y + (this.height * 2) / 3,
      Math.random() * 300
    );
  }

  _canJump() {
    return this.y === this.initialY || this.recentSingleJump;
  }

  _resetJump() {
    if (this.y >= this.initialY) {
      this.recentSingleJump = false;
    }
  }

  _useFloorAsLimit() {
    if (this.y > this.initialY) {
      this.y = this.initialY;
    }
  }
}
