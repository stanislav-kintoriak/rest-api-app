const { ContactModel } = require("../models/Contact");

const getContactByIdController = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contactById = await ContactModel.findById(contactId);

    res.status(200).json({ message: "Succeeded", contactById });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getContactByIdController };
