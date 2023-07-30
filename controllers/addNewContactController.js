const { ContactModel } = require("../models/Contact");

const addNewContactController = async (req, res, next) => {
  try {
    const newContact = await ContactModel.create(req.body);

    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addNewContactController };
