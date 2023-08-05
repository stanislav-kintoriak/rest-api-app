const { UserModel } = require("../../models/User");

const logoutController = async (req, res) => {
  const { _id } = req.user;

  try {
    const user = await UserModel.findByIdAndUpdate(_id, { token: "" });

    if (!user) {
      res.status(401).json({ massage: "Unautorized" });
      return;
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

module.exports = { logoutController };
