const express = require("express");

const {
  getAllContactsController,
  getContactByIdController,
  addNewContactController,
  deleteContactByIdController,
  putContactByIdController,
  patchContactByIdController,
} = require("../../controllers/Contacts");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContactsController);

contactsRouter.get("/:contactId", getContactByIdController);

contactsRouter.post("/", addNewContactController);

contactsRouter.delete("/:contactId", deleteContactByIdController);

contactsRouter.put("/:contactId", putContactByIdController);

contactsRouter.patch("/:contactsId/favorite", patchContactByIdController);

module.exports = contactsRouter;
