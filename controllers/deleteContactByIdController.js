const { listContacts, removeContact } = require("../models/contacts");

const deleteContactByIdController = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const currentContacts = listContacts();

    const index = currentContacts.findIndex((item) => item.id === contactId);

    if (index === -1) {
      res.status(404).json({ massage: "Not found" });
    } else {
      await removeContact(contactId);

      res.status(200).json({ massage: "Contact  deleted" });
    }
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

module.exports = { deleteContactByIdController };
