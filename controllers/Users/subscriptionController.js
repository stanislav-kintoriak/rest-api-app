const { UserModel } = require("../../models/User");

const subscriptionController = async (req, res) => {
  const { _id } = req.user;
  const updatedSubscription = req.body.subscription;

  try {
    const user = await UserModel.findByIdAndUpdate(
      _id,
      { subscription: updatedSubscription },
      { new: true }
    );

    await user.save();

    if (!user) {
      res.status(401).json({ massage: "Unautorized" });
      return;
    }

    res.status(200).json({
      email: user.email,
      subscription: user.subscription,
    });
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
};

module.exports = { subscriptionController };
