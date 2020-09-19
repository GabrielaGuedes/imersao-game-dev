class EnemySpawner {
  constructor(enemies) {
    this.enemies = enemies;
    this.inactiveEnemies = this.enemies;
    this.activeEnemies = [];
    this._setSpeedForEnemies();
    this.timer = 0;
    this.enemyInterval = 50;
  }

  draw() {
    this.activeEnemies.forEach((enemy) => enemy.draw());
    this.timer++;

    if (this.timer > this.enemyInterval) {
      this.spawnRandomEnemy();
      this._updateIntervalAndTimer();
    }

    this._passCrossedEnemiesFromActiveToInactive();
  }

  spawnRandomEnemy() {
    if (this.inactiveEnemies.length > 0) {
      const newEnemy = this.inactiveEnemies.splice(
        this._getRandomIndex(),
        1
      )[0];
      newEnemy.appear();
      this.activeEnemies.push(newEnemy);
    }
  }

  _updateIntervalAndTimer() {
    if (this.enemyInterval > 10) {
      this.enemyInterval -= 2;
    }
    this.timer = 0;
  }

  _setSpeedForEnemies() {
    this.enemies.forEach((enemy) => {
      enemy.setSpeed(Math.random() * 20 + 15);
    });
  }

  _passCrossedEnemiesFromActiveToInactive() {
    this.activeEnemies = this.activeEnemies.filter((enemy) => {
      if (enemy.hasCrossedScreen() && !this.inactiveEnemies.includes(enemy)) {
        this.inactiveEnemies.push(enemy);
      }
      return !enemy.hasCrossedScreen();
    });
  }

  _getRandomIndex() {
    return Math.floor(Math.random() * this.inactiveEnemies.length);
  }
}
