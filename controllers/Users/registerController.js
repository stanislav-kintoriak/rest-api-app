const bcrypt = require("bcrypt");

const UserModel = require("../../models/User");

const registerController = async (req, res) => {
  try {
    const { password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      ...req.body,
      password: hashPassword,
    });

    res.status(201).json({
      status: 201,
      message: "Succeed",
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ message: "Email is in use" });
      return;
    }

    res.status(400).json({ message: "Validation failure" });
  }
};

module.exports = { registerController };