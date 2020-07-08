const CHARACTER_IMAGE_CONFIGS = () => {
  const image = loadImage(IMAGE_PATHS.runningCharacter);
  return {
    image,
    frames: 12,
    width: 150,
    height: 275,
    spriteWidth: 300,
    spriteHeight: 550,
    frameColumns: 4,
  };
};

const PLANKTON_IMAGE_CONFIGS = () => {
  const image = loadImage(IMAGE_PATHS.plankton);
  return {
    image,
    frames: 10,
    width: 67.1,
    height: 137,
    spriteWidth: 67.1,
    spriteHeight: 137,
    frameColumns: 10,
  };
};

const SQUIDWARD_IMAGE_CONFIGS = () => {
  const image = loadImage(IMAGE_PATHS.squidward);
  return {
    image,
    frames: 6,
    width: 97.66,
    height: 110,
    spriteWidth: 48.83,
    spriteHeight: 55,
    frameColumns: 6,
  };
};

const BOAT_IMAGE_CONFIGS = () => {
  const image = loadImage(IMAGE_PATHS.boat);
  return {
    image,
    frames: 2,
    width: 168,
    height: 124,
    spriteWidth: 84,
    spriteHeight: 62,
    frameColumns: 2,
  };
};
