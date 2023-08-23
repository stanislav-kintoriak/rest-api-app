const multer = require("multer");
const { nanoid } = require("nanoid");
const ServiceError = require("../services");
const path = require("path");

const tempDir = path.join(process.cwd(), "tmp");

const multerConfig = multer.diskStorage({
  destination: (req, file, cbk) => {
    cbk(null, tempDir);
  },

  filename: (req, file, cbk) => {
    const extensions = file.mimetype.split("/")[1];
    const newFileName = `${req.user.id}-${nanoid(10)}.${extensions}`;
    cbk(null, newFileName);
  },
});

const multerFilter = (req, file, cbk) => {
  if (file.mimetype.split("/")[0] === "image") {
    cbk(null, true);
  } else {
    cbk(new ServiceError(400, "Please, upload images only!"), false);
  }
};

const upload = multer({
  storage: multerConfig,
  fileFilter: multerFilter,
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
});

const avatarMiddleware = upload.single("avatar");

module.exports = avatarMiddleware;
