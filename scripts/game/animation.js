class Animation {
  constructor(imageConfigs, x) {
    this.imageFrames = imageConfigs.frames;
    this.image = imageConfigs.image;
    this.width = imageConfigs.width;
    this.height = imageConfigs.height;
    this.x = x;
    this.y = height - this.height - GAME_CONSTANTS.floorHeight;
    this.spriteWidth = imageConfigs.spriteWidth;
    this.spriteHeight = imageConfigs.spriteHeight;
    this.frameColumns = imageConfigs.frameColumns;
    this.currentFrame = 0;
    this._calculateMatrix();
  }

  show() {
    image(this.image, this.x, this.y, this.width, this.height, this.matrix[this.currentFrame][0], 
      this.matrix[this.currentFrame][1], this.spriteWidth, this.spriteHeight); 
    this.animate();
  }

  animate() {
    this.currentFrame++;
    
    if(this.currentFrame >= this.matrix.length){
      this.currentFrame = 0;
    }
  }

  polygonFrame() {
    const adjustedWidth = this.width * GAME_CONSTANTS.precision;
    const adjustedHeight = this.height * GAME_CONSTANTS.precision;

    const adjustedX = this.x + (this.width - adjustedWidth)/2;
    const adjustedY = this.y + (this.height - adjustedHeight)/2;

    const polygonFrame = [];

    polygonFrame[0] = createVector(adjustedX + adjustedWidth/3, adjustedY);
    polygonFrame[1] = createVector(adjustedX, adjustedY + adjustedHeight/3);
    polygonFrame[2] = createVector(adjustedX, adjustedY + 2*adjustedHeight/3);
    polygonFrame[3] = createVector(adjustedX + adjustedWidth/3, adjustedY + adjustedHeight);
    polygonFrame[4] = createVector(adjustedX + 2*adjustedWidth/3, adjustedY + adjustedHeight);
    polygonFrame[5] = createVector(adjustedX + adjustedWidth, adjustedY + 2*adjustedHeight/3);
    polygonFrame[6] = createVector(adjustedX + adjustedWidth, adjustedY + adjustedHeight/3);
    polygonFrame[7] = createVector(adjustedX + 2*adjustedWidth/3, adjustedY);

    return polygonFrame;
  }

  _calculateMatrix() {
    this.matrix = [];
    for (let i = 0; i < this.imageFrames; i++) {
      this.matrix[i] = [(i % this.frameColumns) * this.spriteWidth, parseInt(i/this.frameColumns) * this.spriteHeight];
    }
  }
}