function preload() {
  initialScreenFont = loadFont(FONT_PATHS.initialScreenFont);
  initialScreenImage = loadImage(IMAGE_PATHS.initialScreen);
  scenarioImage = loadImage(IMAGE_PATHS.forestScenario);
  gameOverImage = loadImage(IMAGE_PATHS.gameOver);
  heartImage = loadImage(IMAGE_PATHS.heart);
  gameSound = loadSound(SOUNDS_PATHS.gameTrack);
  jumpSound = loadSound(SOUNDS_PATHS.jump);
  gameOverSound = loadSound(SOUNDS_PATHS.gameOver);
}
