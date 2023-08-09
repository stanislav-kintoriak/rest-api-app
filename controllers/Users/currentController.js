const { UserModel } = require("../../models/User");

const currentController = async (req, res) => {
  const { _id } = req.user;

  try {
    const user = await UserModel.findById(_id);

    if (!user) {
      res.status(401).json({ massage: "Unautorized" });
      return;
    }

    res.status(200).json({
      email: user.email,
      subscription: user.subscription,
    });
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

module.exports = { currentController };
