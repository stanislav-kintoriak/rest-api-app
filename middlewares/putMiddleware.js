const { joiSchemas } = require("../models/Contact");

const { postSchema } = joiSchemas;

const putMiddleware = async (req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    try {
      await postSchema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(400).json(error.message);
    }
  } else {
    next();
  }
};

module.exports = putMiddleware;