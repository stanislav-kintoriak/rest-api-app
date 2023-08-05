const { registerController } = require("./registerController");

const { loginController } = require("./loginController");

const { currentController } = require("./currentController");

const { logoutController } = require("./logoutController");

module.exports = {
  registerController,
  loginController,
  currentController,
  logoutController,
};
