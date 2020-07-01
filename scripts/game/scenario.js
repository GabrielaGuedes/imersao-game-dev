class Scenario {
  constructor(image, speed) {
    this.image = image;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = width;
  }

  draw() {
    this.show();
    this.move();
  }
  
  show() {
    image(this.image, this.x1, 0, width, height);
    image(this.image, this.x2, 0, width, height);
  }
  
  move(){
    this.x1 = this.x1 - this.speed;
    this.x2 = this.x2 - this.speed;
    
    if (this._positionHasCompletlyDisappeared(this.x1)) 
      this.x1 = width;
    if (this._positionHasCompletlyDisappeared(this.x2)) 
      this.x2 = width;
  }

  _positionHasCompletlyDisappeared(position){
    return position < -width;
  }
}