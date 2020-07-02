class EnemySpawner {
  constructor(enemies) {
    this.enemies = enemies;
    this.currentIndex = 0;
    this.setSpeedForEnemies();
  }

  setSpeedForEnemies() {
    this.enemies.forEach(enemy => {
      enemy.speed = this._getRandomSpeed();
    })
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

  _getRandomSpeed() {
    return Math.random()*20 + 10;
  }
}