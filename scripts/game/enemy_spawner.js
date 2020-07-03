class EnemySpawner {
  constructor(enemies) {
    this.enemies = enemies;
    this.currentIndex = 0;
    this._setSpeedForEnemies();
  }
  draw() {
    this.currentEnemy().draw();

    if (this._enemyDisappeared()) {
      this.updateCurrentIndex();
      this.currentEnemy().appear();
    }
  }

  updateCurrentIndex() {
    this.currentIndex = this._getRandomIndex();
  }

  currentEnemy() {
    return this.enemies[this.currentIndex];
  }

  _setSpeedForEnemies() {
    this.enemies.forEach(enemy => {
      enemy.speed = Math.random()*20 + 10;
    })
  }


  _enemyDisappeared() {
    return this.currentEnemy().x < - this.currentEnemy().width;
  }

  _getRandomIndex() {
    return Math.floor(Math.random() * this.enemies.length);
  }
}