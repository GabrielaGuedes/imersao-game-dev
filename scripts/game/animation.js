class Animation {
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
    this.imageFrames = imageFrames;
    this.image = image;
    this.width = objectWidth;
    this.height = objectHeight;
    this.coordinates = {x: x, y: height - this.height};
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.frameColumns = frameColumns;
    this.currentFrame = 0;
    this.calculateMatrix();
  }

  show(){
    image(this.image, this.coordinates.x, this.coordinates.y, this.width, this.height, this.matrix[this.currentFrame][0], 
      this.matrix[this.currentFrame][1], this.spriteWidth, this.spriteHeight); 
    this.animate();
  }

  animate(){
    this.currentFrame++;
    
    if(this.currentFrame >= this.matrix.length){
      this.currentFrame = 0;
    }
  }

  calculateMatrix() {
    this.matrix = [];
    for (let i = 0; i < this.imageFrames; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < 2; j++) {
            this.matrix[i][j] = j % 2 === 0 ? (i % this.frameColumns) * this.spriteWidth : parseInt(i/this.frameColumns) * this.spriteHeight;
        }
    }
  }
}