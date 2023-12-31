const { registerController } = require("./registerController");

const { loginController } = require("./loginController");

const { currentController } = require("./currentController");

const { logoutController } = require("./logoutController");

const { subscriptionController } = require("./subscriptionController");

const { avatarController } = require("./avatarController");

const { verificationController } = require("./verificationController");

const {resendVerificationController} = require("./resendVerificationController")

module.exports = {
  registerController,
  loginController,
  currentController,
  logoutController,
  subscriptionController,
  avatarController,
  verificationController,
  resendVerificationController
};
