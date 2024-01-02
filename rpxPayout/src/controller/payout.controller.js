// const Sequelize = require('sequelize')
const payoutDao = require('../dao/payout.dao')
const axios = require('axios')
// const contactdb = require('../config/contactdb') 
// const { updateFund } = require('../dao/fund.dao')

const userName = ""
const password = ""

async function createPayout(req,res){
    const data = {
        account_number: "",
        fund_account_id: "",
        amount: 1000000,
        currency: "INR",
        mode: "IMPS",
        purpose: "refund",
        queue_if_low_balance: true,
        reference_id: "",
        narration: "",
        notes: {
          notes_key_1:"",
          notes_key_2:""
        }
    }
    const buffer = Buffer.from(`${userName}:${password}`);
    const string = buffer.toString('base64');
    const authorization = `Basic ${string}`;
    var response = await axios({
        url: 'https://api.razorpay.com/v1/payouts',
        method: 'post',
        headers: {
            Authorization: authorization,
        },
        data: data
        // Request Body if you have    
    }).catch((err) => {
        console.log('ERROR ON HTTP REQUEST', err);
    });
    res.send(response.data)
    console.log(response.data)
    payoutDao.create(response.data);


};

// async function allPayout(req,res) {
//     let result = await payoutDao.findAll()
//     res.send(result)
//     console.log(result)
// }


module.exports = {createPayout};
