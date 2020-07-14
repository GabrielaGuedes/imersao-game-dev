class CollectibleGenerator {
  constructor() {
    this.displayedCollectibles = [];
    this.timer = 0;
    this._setRandomIntervalForCollectible();
  }

  draw() {
    this.displayedCollectibles.forEach((collectible) => collectible.draw());
    this.timer++;

    if (this.timer > this.collectibleInterval) {
      this.generateNewCollectible();
      this.timer = 0;
      this._setRandomIntervalForCollectible();
    }
  }

  generateNewCollectible() {
    this.displayedCollectibles.push(
      new Collectible(PINK_JELLYFISH_IMAGE_CONFIGS(), width)
    );
  }

  _setRandomIntervalForCollectible() {
    this.collectibleInterval = Math.floor(Math.random() * 150);
  }
}
