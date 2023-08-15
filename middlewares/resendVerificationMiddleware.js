const resendVerificationSchema = require("../models/User");

const resendVerificationMiddleware = async (req, res, next) => {
  try {
    await resendVerificationSchema.validateAsync(req.body);
    next();
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "Validation error" });
  }
};

module.exports = resendVerificationMiddleware;
