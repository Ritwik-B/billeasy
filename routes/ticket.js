const express = require("express");
const ticketController = require("../controllers/ticket");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();
router.post(
  "/",
  authMiddleware.shouldBeAuthenticated,
  ticketController.createTicket
);

router.post(
  "/",
  authMiddleware.shouldBeAuthenticated,
  ticketController.createTicket
);

router.post(
  "/:ticketId/assign",
  authMiddleware.shouldBeAuthenticated,
  ticketController.assignTicket
);

module.exports = router;
