const { ContactModel } = require("../../models/Contact");

const patchContactByIdController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const updatedContact = await ContactModel.findByIdAndUpdate(
      contactId,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedContact);
  } catch (error) {
    res.statues(404).json({ massage: error.message });
  }
};

module.exports = { patchContactByIdController };
