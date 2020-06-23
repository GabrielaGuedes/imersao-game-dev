class Character {
  constructor(image){
    this.image = image;
    this.matrix = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ];
    this.currentFrame = 0;
  }
  
  show(){
      image(this.image, 0, height-135, 110, 135, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], 220, 270); // image, coordenadas da posição inicial (x, y), width, height, coordenadas interna da image, width e height interno da image
    this.animate();
  }
  
  animate(){
    this.currentFrame++;
    
    if(this.currentFrame >= this.matrix.length){
      this.currentFrame = 0;
    }
  
  }
}