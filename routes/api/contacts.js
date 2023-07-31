const express = require("express");

const {
  getAllContactsController,
  getContactByIdController,
  addNewContactController,
  deleteContactByIdController,
  putContactByIdController,
  patchContactByIdController
} = require("../../controllers");

const router = express.Router();

router.get("/", getAllContactsController);

router.get("/:contactId", getContactByIdController);

router.post("/", addNewContactController);

router.delete("/:contactId", deleteContactByIdController);

router.put("/:contactId", putContactByIdController);

router.patch("/:contactsId/favorite", patchContactByIdController)

module.exports = router;
