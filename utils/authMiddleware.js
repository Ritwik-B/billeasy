const jwt = require("jsonwebtoken");

function shouldBeAuthenticated(req, res, next) {
  try {
    const header = req.headers.authorization;
    if (!header) {
      res.status(400).send({
        message: "User not logged in",
      });
    }

    const token = header.split(" ")[1];

    jwt.verify(token, "shhhhh");
    next();
  } catch (error) {
    res.status(400).send({
      message: error.toString(),
    });
  }
}

function getDecodedToken(token) {
  try {
    if (!token) {
      res.status(400).send({
        message: "User not logged in",
      });
    }

    return jwt.verify(token, "shhhhh");
  } catch (error) {
    res.status(400).send({
      message: error.toString(),
    });
  }
}

module.exports = { shouldBeAuthenticated, getDecodedToken };
