const CHARACTER_HEIGHT = 135;
const CHARACTER_WIDTH = 110;
const IMAGE_HEIGHT = 270;
const IMAGE_WIDTH = 220;
const IMAGE_FRAMES = 16;
const IMAGE_FRAMES_ROWS = 4;
const IMAGE_FRAMES_COLUMNS = 4;

class Character {
  constructor(image){
    this.image = image;
    this.matrix = this.calculateMatrix();
    this.coordinates = {x: 0, y: height - CHARACTER_HEIGHT}
    this.currentFrame = 0;
  }
  
  show(){
    image(this.image, this.coordinates.x, this.coordinates.y, CHARACTER_WIDTH, CHARACTER_WIDTH, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], IMAGE_WIDTH, IMAGE_HEIGHT); 
    this.animate();
  }
  
  animate(){
    this.currentFrame++;
    
    if(this.currentFrame >= this.matrix.length){
      this.currentFrame = 0;
    }
  }

  calculateMatrix(){
    let matrix = [];
    for (let i = 0; i < IMAGE_FRAMES; i++) {
        matrix[i] = [];
        for (let j = 0; j < 2; j++) {
            matrix[i][j] = j % 2 === 0 ? (i % 4) * IMAGE_WIDTH : parseInt(i/4) * IMAGE_HEIGHT;
        }
    }
    return matrix;
  }
}