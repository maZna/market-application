const marketLogo = require("./market-logo.png").default;
const lock = require("./lock.png").default;
const tick = require("./tick.png").default;

const mug1 = require("./templates/mug-1.png").default;
const mug2 = require("./templates/mug-2.png").default;
const mug3 = require("./templates/mug-3.png").default;
const mug4 = require("./templates/mug-4.png").default;

const shirt1 = require("./templates/shirt-1.png").default;
const shirt2 = require("./templates/shirt-2.png").default;
const shirt3 = require("./templates/shirt-3.png").default;
const shirt4 = require("./templates/shirt-4.png").default;

const logos = {
  marketLogo,
  lock,
  tick,
};

export function getRandomMug(i) {
  const mugs = [mug1, mug2, mug3, mug4];
  while (i >= mugs.length) i = i - mugs.length;
  return mugs[i];
}

export function getRandomShirt(i) {
  const shirts = [shirt1, shirt2, shirt3, shirt4];
  while (i >= shirts.length) i = i - shirts.length;
  return shirts[i];
}

export default logos;
