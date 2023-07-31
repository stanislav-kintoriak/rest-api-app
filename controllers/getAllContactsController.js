const { ContactModel } = require("../models/Contact");

const getAllContactsController = async (req, res, next) => {
  try {
    const contacts = await ContactModel.find();

    res.status(200).json({ message: "Got contacts successfully", contacts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllContactsController };
