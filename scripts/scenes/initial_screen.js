class InitialScreen {
  constructor() {
    
  }

  draw(){
    this._backgroundImage();
    this._text();
    this._button();
  }

  _backgroundImage(){
    image(initialScreenImage, 0, 0, width, height);
  }

  _text(){
    const fontSize = 50;
    textFont(initialScreenFont);
    textSize(fontSize);
    textAlign(CENTER);
    text('As aventuras de', width/2, height/5);
    text('Tuk', width/2, height/5 + fontSize);
  }

  _button(){
    managerButton.y = height/7*5;
    managerButton.draw();
  }
}