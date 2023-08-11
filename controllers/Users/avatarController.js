const fs = require("fs/promises");
const path = require("path");
const { UserModel } = require("../../models/User");
const Jimp = require("jimp");

const avatarController = async (req, res) => {


  try {

    const { _id } = req.user;
    const avatarDir = path.join(process.cwd(), "public", "avatars");

    const { path: tempUpload, filename } = req.file;

    const resultUpload = path.join(avatarDir, filename);

    const image = await Jimp.read(tempUpload);
    image.resize(250, 250);
    image.write(resultUpload);

    await fs.unlink(tempUpload);

    const avatarUrl = path.join(process.env.BACKEND_HOST, "avatars", filename);

    await UserModel.findByIdAndUpdate(_id, { avatarUrl });

    const oldPathAvatar = req.user.avatarUrl.split("\\");

    if (oldPathAvatar[1] === process.env.BACKEND_HOST.split("//")[1]) {
      try {
        await fs.unlink(path.join(avatarDir, oldPathAvatar[3]));
      } catch (err) {
        console.log(err.message);
      }
    }
    res.status(200).json({ avatarUrl });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { avatarController };
