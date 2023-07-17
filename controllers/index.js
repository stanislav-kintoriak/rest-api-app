const { getAllContactsController } = require("./getAllContactsController");

const { getContactByIdController } = require("./getContactByIdController");

const { addNewContactController } = require("./addNewContactController");

const {
  deleteContactByIdController,
} = require("./deleteContactByIdController");

const {
  updateContactByIdController,
} = require("./updateContactByIdController");

module.exports = {
  getAllContactsController,
  getContactByIdController,
  addNewContactController,
  deleteContactByIdController,
  updateContactByIdController,
};
