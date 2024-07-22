const express = require("express");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const ticketRoutes = require("./routes/ticket");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/tickets", ticketRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
