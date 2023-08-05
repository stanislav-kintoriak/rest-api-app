const { getAllContactsController } = require("./getAllContactsController");

const { getContactByIdController } = require("./getContactByIdController");

const { addNewContactController } = require("./addNewContactController");

const {
  deleteContactByIdController,
} = require("./deleteContactByIdController");

const {
  putContactByIdController,
} = require("./putContactByIdController");

const {
  patchContactByIdController,
} = require("./patchContactByIdController");

module.exports = {
  getAllContactsController,
  getContactByIdController,
  addNewContactController,
  deleteContactByIdController,
  putContactByIdController,
  patchContactByIdController,
};
