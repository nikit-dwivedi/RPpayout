const express = require("express");
const route = express.Router();

const {createContact} = require('../controller/contact.controller');

route.post('/',createContact);



module.exports = route;