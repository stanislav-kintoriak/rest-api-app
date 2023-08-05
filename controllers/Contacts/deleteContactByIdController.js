const { ContactModel } = require("../../models/Contact");

const deleteContactByIdController = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    await ContactModel.findByIdAndRemove(contactId);

    res.status(200).json({ massage: "Contact  deleted" });
  } catch (error) {
    res.status(404).json({ massage: error.massage });
  }
};

module.exports = { deleteContactByIdController };
