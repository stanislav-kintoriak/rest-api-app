const { joiSchemas } = require("../models/contact");

const { putSchema } = joiSchemas;

const putMiddleware = async (req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    try {
      await putSchema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(400).json(error.details[0].message);
    }
  } else {
    next();
  }
};

module.exports = putMiddleware;