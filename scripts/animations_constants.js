const CHARACTER_IMAGE_CONFIGS = () => {
  const image = loadImage(IMAGE_PATHS.runningCharacter);
  return ({
    image,
    frames: 16,
    width: 110,
    height: 135,
    spriteWidth: 220,
    spriteHeight: 270,
    frameColumns: 4
  })
}

const LITTLE_DROP_IMAGE_CONFIGS = () => {
  const image = loadImage(IMAGE_PATHS.littleDropEnemy);
  return ({
    image,
    frames: 28,
    width: 52,
    height: 52,
    spriteWidth: 104,
    spriteHeight: 104,
    frameColumns: 4
  })
}
const LITTLE_DROP_SPEED = 10;

const TROLL_IMAGE_CONFIGS = () => {
  const image = loadImage(IMAGE_PATHS.trollEnemy);
  return ({
    image,
    frames: 28,
    width: 200,
    height: 200,
    spriteWidth: 400,
    spriteHeight: 400,
    frameColumns: 5
  })
}
const TROLL_SPEED = 10;

const FLYING_ENEMY_IMAGE_CONFIGS = () => {
  const image = loadImage(IMAGE_PATHS.flyingDropEnemy)
  return ({
    image,
    frames: 16,
    width: 100,
    height: 75,
    spriteWidth: 200,
    spriteHeight: 150,
    frameColumns: 3
  })
}
const FLYING_ENEMY_SPEED = 10;