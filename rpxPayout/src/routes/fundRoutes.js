const express = require("express");
const route = express.Router();

const {createFund} = require('../controller/fund.controller');
const {allFund} = require('../controller/fund.controller');
// const {updateStatus} = require('../controller/fund.controller');


// let fund_id = "fa_J7jKWx8D0UMoq9"


route.get('/',allFund);
route.post('/create',createFund);
// route.update(`/${fund_id}`,updateStatus)



module.exports = route;