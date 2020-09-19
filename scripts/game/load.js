function preload() {
  spongeBobFont = loadFont(FONT_PATHS.spongeBobFont);
  initialScreenImage = loadImage(IMAGE_PATHS.initialScreen);
  scenarioImage = loadImage(IMAGE_PATHS.forestScenario);
  heartImage = loadImage(IMAGE_PATHS.heart);
  gameSound = loadSound(SOUNDS_PATHS.gameTrack);
  jumpSound = loadSound(SOUNDS_PATHS.jump);
  gameOverSound = loadSound(SOUNDS_PATHS.gameOver);
  damagedSound = loadSound(SOUNDS_PATHS.damaged);
}
