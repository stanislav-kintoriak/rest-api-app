const express = require("express");

const {
  authMiddleware,
  userValidMiddleware,
  subscriptionMiddleware,
} = require("../../middlewares");

const {
  currentController,
  loginController,
  logoutController,
  registerController,
  subscriptionController,
} = require("../../controllers/Users");

const router = express.Router();

router.patch(
  "/",
  authMiddleware,
  subscriptionMiddleware,
  subscriptionController
);
router.post("/register", userValidMiddleware, registerController);
router.post("/login", userValidMiddleware, loginController);
router.post("/logout", authMiddleware, logoutController);
router.get("/current", authMiddleware, currentController);

module.exports = router;
