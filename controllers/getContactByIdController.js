const { getContactById } = require("../models/contacts");

const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await getContactById(contactId);

  try {
    if (contact) {
      res.status(200).json({ message: "Succeeded", contact });
    } else {
      res.status(404).json({ massage: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getContactByIdController };
