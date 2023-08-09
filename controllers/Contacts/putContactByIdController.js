const { ContactModel } = require("../../models/Contact");

const putContactByIdController = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const updatedContact = await ContactModel.findByIdAndUpdate(
      contactId,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { putContactByIdController };
