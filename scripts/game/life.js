class Life {
  constructor(total, initial) {
    this.total = total;
    this.initial = initial;
    this.lifes = this.initial;

    this.width = 25;
    this.height = 25;
    this.initialX = 20;
    this.y = 20;
  }

  draw() {
    const margin = 10;
    const position = this.initialX;
    for(let i = 0; i < this.lifes; i++) {
      image(heartImage, this.initialX*(1+i) + margin*i, this.y, this.width, this.height);
    }
  }

  gainLife() {
    if (this.lifes < this.total) {
      this.lifes++;
    }
  }

  lostLife() {
    this.lifes--;
  }
}