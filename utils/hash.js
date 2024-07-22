const { scryptSync } = require("node:crypto");
// Using the factory defaults.

function generatePasswordHash(password) {
  const hash = scryptSync(password, "salt", 64);

  return hash.toString("hex");
}

module.exports = { generatePasswordHash };
