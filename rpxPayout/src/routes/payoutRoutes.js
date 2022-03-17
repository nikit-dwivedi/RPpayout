const express = require("express");
const route = express.Router();

const {createPayout} = require('../controller/payout.controller');




route.post('/create',createPayout);




module.exports = route;