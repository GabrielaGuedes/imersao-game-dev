class EnemySpawner {
  constructor(enemies) {
    this.enemies = enemies;
  }

  addEnemy(enemy) {
    this.enemies.push(enemy);
  }

  spawnEnemy() {
    if (this.canSpawn()) {
      this.randomEnemy().allowedToShow = true;
    }
  }

  canSpawn() {
    return this.enemies.filter(enemy => enemy.isBeingDisplayed()).length === 0;
  }

  randomEnemy() {
    return this.enemies[Math.floor(Math.random() * this.enemies.length)];
  }
}