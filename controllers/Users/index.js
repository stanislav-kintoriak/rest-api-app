const { registerController } = require("./registerController");

const { loginController } = require("./loginController");

const { currentController } = require("./currentController");

const { logoutController } = require("./logoutController");

const { subscriptionController } = require("./subscriptionController");

const {avatarController} = require("./avatarController")

module.exports = {
  registerController,
  loginController,
  currentController,
  logoutController,
  subscriptionController,
  avatarController,
};
