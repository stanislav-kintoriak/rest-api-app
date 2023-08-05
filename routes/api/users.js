const express = require("express");

const { authMiddleware, userValidMiddleware } = require("../../middlewares");

const {
  currentController,
  loginController,
  logoutController,
  registerController,
} = require("../../controllers");

const userRouter = express.Router();

userRouter.patch("/");
userRouter.post("/register", userValidMiddleware, registerController);
userRouter.post("/login", userValidMiddleware, loginController);
userRouter.post("/logout", authMiddleware, logoutController);
userRouter.get("/current", authMiddleware, currentController);

module.exports = userRouter;
