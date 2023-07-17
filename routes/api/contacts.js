const express = require("express");

const {
  getAllContactsController,
  getContactByIdController,
  addNewContactController,
  deleteContactByIdController,
  updateContactByIdController,
} = require("../../controllers");

const router = express.Router();

router.get("/", getAllContactsController);

router.get("/:contactId", getContactByIdController);

router.post("/", addNewContactController);

router.delete("/:contactId", deleteContactByIdController);

router.put("/:contactId", updateContactByIdController);

module.exports = router;
