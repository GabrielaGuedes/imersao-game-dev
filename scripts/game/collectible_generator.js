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
      this._addNewCollectible();
      this.timer = 0;
      this._setRandomIntervalForCollectible();
    }

    this._updateAvailableCollectibles();
  }

  _addNewCollectible() {
    this.displayedCollectibles.push(this._generateCollectible());
  }

  _generateCollectible() {
    if (Math.floor(Math.random() * 100) < 10) {
      return this._specialCollectible();
    }
    return this._defaultCollectible();
  }

  _defaultCollectible() {
    return new Collectible(PINK_JELLYFISH_IMAGE_CONFIGS(), width);
  }

  _specialCollectible() {
    return new Collectible(BLUE_JELLYFISH_IMAGE_CONFIGS(), width, true);
  }

  _setRandomIntervalForCollectible() {
    this.collectibleInterval = Math.floor(Math.random() * 150);
  }

  _updateAvailableCollectibles() {
    this.displayedCollectibles.filter((collectible) => !collectible.collected);
  }
}
