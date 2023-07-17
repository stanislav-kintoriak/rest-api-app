const { addContact } = require("../models/contacts");
const { nanoid } = require("nanoid");

const addNewContactController = async (req, res, next) => {
  try {
    if (!req.body.name) {
      res.status(400).json({ message: 'Missing required name field "name"' });
    }
    if (!req.body.email) {
      res.status(400).json({ message: 'Missing required name field "email"' });
    }
    if (!req.body.phone) {
      res.status(400).json({ message: 'Missing required name field "phone"' });
    }

    req.body.id = nanoid(21);
    const newContact = await addContact(req.body);

    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addNewContactController };
