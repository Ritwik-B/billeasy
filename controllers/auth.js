const db = require("../models/index");

const validation = require("../utils/validation");
const hash = require("../utils/hash");

const jwt = require("jsonwebtoken");

async function loginUser(req, res, next) {
  try {
    const password = req.query.password;
    //validation
    validation.isValidPassword(password);

    //hash password
    const encryptedPassword = hash.generatePasswordHash(password);

    const user = await db.sequelize.models.User.findOne({
      where: {
        email: req.query.email,
      },
    });

    if (encryptedPassword === user.password) {
      const token = jwt.sign({ id: user.id }, "shhhhh");
      res.json({ token });
    }

    res.status(400).send({
      message: "Incorrect passowrd",
    });
  } catch (error) {
    res.status(400).send({
      message: error.toString(),
    });
  }
}

module.exports = { loginUser };
