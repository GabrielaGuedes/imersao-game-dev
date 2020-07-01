class EnemySpawner {
  constructor(enemies) {
    this.enemies = enemies;
    this.currentIndex = 0;
    this.speeds = [10, 30, 40];
    this.enemies[0].speed = 10
    this.enemies[1].speed = 30
    this.enemies[2].speed = 40
  }

  draw() {
    this.currentEnemy().draw();

    if (this._hasVisibleEnemy()) {
      this.updateCurrentIndex();
      this.currentEnemy().appear();
    }
  }

  updateCurrentIndex() {
    this.currentIndex++;
    if(this.currentIndex >= this.enemies.length) {
      this.currentIndex = 0;
    }
  }

  currentEnemy() {
    return this.enemies[this.currentIndex];
  }

  _hasVisibleEnemy() {
    return this.currentEnemy().x < - this.currentEnemy().width;
  }

}