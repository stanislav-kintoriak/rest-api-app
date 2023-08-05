const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { UserModel } = require("../../models/User");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(401).json({ message: "Email or password is wrong" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Email or password is wrong" });
      return;
    }

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, process.env.Secret_KEY, {
      expiresIn: process.env.EXPIRES_IN,
    });

    await UserModel.findByIdAndUpdate(user._id, { token: token });

    res.status(200).json({
      token,
      user: {
        email: user.email,
        subscription: user.subscription,
      },
    });
  } catch (error) {
    res.status(401).json({ message: "Email or password is wrong" });
  }
};

module.exports = { loginController };
