const GAME_CONSTANTS = {
  gravity: 3,
  precision: 0.7,
  frameRate: 40,
  gameOverImageWidth: 412,
  gameOverImageHeight: 78,
  floorHeight: 155,
  totalLife: 3,
  initialLife: 3,
  scenarioSpeed: 10,
  characterPosition: 100,
};

const IMAGE_PATHS = {
  forestScenario: "images/scenario/sponge.jpg",
  initialScreen: "images/assets/initial_screen.jpeg",
  runningCharacter: "images/character/sponge2.png",
  plankton: "images/enemies/plankton.png",
  squidward: "images/enemies/squidward.png",
  boat: "images/enemies/boat.png",
  pink_jellyfish: "images/collectibles/pink_jellyfish.png",
  gameOver: "images/assets/game_over.png",
  heart: "images/assets/heart.png",
};

const FONT_PATHS = {
  initialScreenFont: "fonts/krabby_patty.ttf",
};

const FONT_SIZES = {
  gameTitle: 60,
  score: 50,
};

const SOUNDS_PATHS = {
  gameTrack: "sounds/spongebob.mp3",
  jump: "sounds/jump_sound.mp3",
};

const COLORS = {
  white: "#fff",
};

const CSS_CLASSES = {
  startButton: "initial-screen-button",
};

const SCREENS = {
  initialScreen: "initialScreen",
  game: "game",
};
