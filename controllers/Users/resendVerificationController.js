const { UserModel } = require("../../models/User");

const { sendEmail } = require("../../services");

const resendVerificationController = async (req, res) => {
  try {
    const { email } = req.body;

    const user = UserModel.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    if (user.verify) {
      res.status(400).json({ message: "Verification has already been passed" });
    }

    const emailObject = {
      to: user.email,
      from: process.env.EMAIL_FROM,
      subject: "Email verification",
      html: `<p>Click this <a target="_blanc" href="${process.env.BACKEND_HOST}/api/users/verify/${verificationToken}">Link</a> to complete verification of your e-mail</p>`,
    };

    sendEmail(emailObject);

    res.status(200).json({ message: "Email send successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { resendVerificationController };
