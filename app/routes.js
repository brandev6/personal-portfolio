
const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../functions/contactFunctions.js');

router.post('/', createContact);
router.get('/', getContacts);

module.exports = router;
