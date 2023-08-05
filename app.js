const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

const {
  patchMiddleware,
  putMiddleware,
  authMiddleware
} = require("./middlewares");

const app = express();
dotenv.config();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(patchMiddleware);
app.use(putMiddleware);

app.use(
  "/api/contacts",
  patchMiddleware,
  putMiddleware,
  authMiddleware,
  contactsRouter
);
app.use("/api/users",  usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
