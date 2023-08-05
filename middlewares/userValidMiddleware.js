const { joiUserSchema } = require("../models/User");

const userValidMiddleware = async (req, res, next) => {
  try {
    await joiUserSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: "Validation error" });
  }
};

module.exports = userValidMiddleware;
