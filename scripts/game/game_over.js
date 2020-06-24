class GameOver {
  constructor(image, imageWidth, imageHeight) {
    this.image = image;
    this.width = imageWidth;
    this.height = imageHeight;
  }

  display() {
    image(this.image, 
      (width - this.width)/2, 
      (height - this.height)/2, 
      this.width, 
      this.height);
  }
}