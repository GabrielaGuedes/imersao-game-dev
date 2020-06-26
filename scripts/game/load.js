function preload() {
  initialScreenFont = loadFont(FONT_PATHS.initialScreenFont);
  initialScreenImage = loadImage(IMAGE_PATHS.initialScreen);
  scenarioImage = loadImage(IMAGE_PATHS.forestScenario);
  characterImage = loadImage(IMAGE_PATHS.runningCharacter);
  littleDropImage = loadImage(IMAGE_PATHS.littleDropEnemy);
  trollImage = loadImage(IMAGE_PATHS.trollEnemy);
  flyingEnemyImage = loadImage(IMAGE_PATHS.flyingDropEnemy);
  gameOverImage = loadImage(IMAGE_PATHS.gameOver);
  gameSound = loadSound(SOUNDS_PATHS.gameTrack);
  jumpSound = loadSound(SOUNDS_PATHS.jump);
}