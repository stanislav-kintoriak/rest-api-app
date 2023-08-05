const jwt = require("jsonwebtoken");

const {UserModel} = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [bearer, token] = authorization.split(" ");

  if (!token || bearer !== "Bearer") {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRET_KEY);

    const user = await UserModel.findById(id);

    if (!user || !user.token || user.token !== token) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
