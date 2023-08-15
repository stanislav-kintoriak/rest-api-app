const patchMiddleware = require("./patchMiddleware");
const putMiddleware = require("./putMiddleware");
const userValidMiddleware = require("./userValidMiddleware");
const authMiddleware = require("./authMiddleware");
const subscriptionMiddleware = require("./subscriptionMiddleware");
const avatarMiddleware = require("./avatarMiddleware");

module.exports = {
  patchMiddleware,
  putMiddleware,
  userValidMiddleware,
  authMiddleware,
  subscriptionMiddleware,
  avatarMiddleware,
};
