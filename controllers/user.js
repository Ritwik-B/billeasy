const db = require("../models/index");

const validation = require("../utils/validation");
const hash = require("../utils/hash");

async function createUser(req, res, next) {
  try {
    const password = req.query.password;
    //validation
    validation.isValidPassword(password);

    //hash password
    const encryptedPassword = hash.generatePasswordHash(password);

    const user = await db.sequelize.models.User.create({
      email: req.query.email,
      password: encryptedPassword,
      name: req.query.name,
    });

    res.json({ user });
  } catch (error) {
    res.status(400).send({
      message: error.toString(),
    });
  }
}

module.exports = { createUser };
