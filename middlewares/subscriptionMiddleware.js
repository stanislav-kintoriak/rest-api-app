const { joiSubscriptionSchema } = require("../models/User");

const subscriptionMiddleware = async (req, res, next) => {
  try {
    await joiSubscriptionSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: "Validation error" });
  }
};

module.exports = subscriptionMiddleware;
