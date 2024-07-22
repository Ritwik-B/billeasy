const db = require("../models/index");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../utils/authMiddleware");

async function createTicket(req, res, next) {
  try {
    const dueDate = req?.query?.dueDate;
    if (dueDate) {
      const isDueDateValidate = Date.now() < new Date(dueDate);
      if (!isDueDateValidate) {
        res.status(400).send({
          message: "Due Date should be in the future",
        });
      }
    }

    const header = req.headers.authorization;
    const token = header.split(" ")[1];

    const decodedToken = authMiddleware.getDecodedToken(token);

    const userId = decodedToken.id;

    const ticket = await db.sequelize.models.Ticket.create({
      createdBy: userId,
      title: req.query.title,
    });

    res.json({ ticket });
  } catch (error) {
    res.status(400).send({
      message: error.toString(),
    });
  }
}

async function assignTicket(req, res, next) {
  try {
    const header = req.headers.authorization;
    const token = header.split(" ")[1];

    const decodedToken = authMiddleware.getDecodedToken(token);

    const userId = decodedToken.id;

    const ticket = await db.sequelize.models.Ticket.findByPk(
      req.parama.ticketId
    );

    if (ticket.createdBy !== userId) {
      res.status(400).send({
        message: "user does not have access",
      });
    }

    res.json({ ticket });
  } catch (error) {
    res.status(400).send({
      message: error.toString(),
    });
  }
}

module.exports = { createTicket };
