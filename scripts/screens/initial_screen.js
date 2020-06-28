class InitialScreen {
  draw(){
    this._backgroundImage();
    this._text();
    this._button();
  }

  _backgroundImage(){
    image(initialScreenImage, 0, 0, width, height);
  }

  _text(){
    textFont(initialScreenFont);
    textSize(FONT_SIZES.gameTitle);
    textAlign(CENTER);
    text('As aventuras de', width/2, height/5);
    text('Tuk', width/2, height/5 + FONT_SIZES.gameTitle);
  }

  _button(){
    managerButton.y = height/7*5;
    managerButton.draw();
  }
}