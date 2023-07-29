const express = require("express");

const {
  getAllContactsController,
  getContactByIdController,
  addNewContactController,
  deleteContactByIdController,
  updateContactByIdController,
  patchController
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", getAllContactsController);

router.get("/:contactId", getContactByIdController);

router.post("/", addNewContactController);

router.delete("/:contactId", deleteContactByIdController);

router.put("/:contactId", updateContactByIdController);

router.patch("/:contactsId/favorite", patchController)

module.exports = router;
