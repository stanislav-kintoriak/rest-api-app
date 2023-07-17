const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join("models", "contacts.json");

// ---------------------------list contacts-------------------------

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);

    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
};

// ---------------------------get contact by id-------------------------

const getContactById = async (contactId) => {
  try {
    const contactsList = await listContacts();

    return contactsList.find((item) => item.id === contactId || null);
  } catch (error) {
    console.log(error.message);
  }
};

// ---------------------------get Contact By Id-------------------------

const removeContact = async (contactId) => {
  try {
    const contactsArr = await listContacts();

    const index = contactsArr.findIndex((item) => item.id === contactId);

    contactsArr.splice(index, 1);

    await fs.writeFile(contactsPath, JSON.stringify(contactsArr));
  } catch (error) {
    console.log(error.message);
  }
};

// ---------------------------add contact-------------------------

const addContact = async (body) => {
  try {
    const currentContacts = await listContacts();

    const newContact = {
      id: body.id,
      name: body.name,
      email: body.email,
      phone: body.phone,
    };

    const newArrOfContacts = [...currentContacts, newContact];

    await fs.writeFile(contactsPath, JSON.stringify(newArrOfContacts));

    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

// ---------------------------add contact-------------------------

const updateContact = async (contactId, body) => {
  try {
    const currentContacts = await listContacts();

    const updatedContacts = currentContacts.map((item) => {
      if (item.id === contactId) {
        item.name = body.name;
        item.email = body.email;
        item.phone = body.phone;
        return item;
      } else {
        return item;
      }
    });

    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
