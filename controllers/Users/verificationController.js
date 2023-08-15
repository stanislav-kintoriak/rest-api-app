const { UserModel } = require("../../models/User");

const verificationController = async (rec, res) => {
  const { verificationToken } = req.params;

  const user = await UserModel.findOne({ verificationToken });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  await UserModel.findByIdAndUpdate(user._id, {
    verificationToken: null,
    verify: true,
  });

  res.status(200).json({ message: "Verification successful" });
};

module.exports = { verificationController };
