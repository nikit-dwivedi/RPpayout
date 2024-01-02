// const Sequelize = require('sequelize')
const fundDao = require('../dao/fund.dao')
const axios = require('axios')
const contactdb = require('../config/contactdb') 

const userName = ""
const password = ""

async function createFund(req,res){
    const data = {
        contact_id: "",
        account_type: "",
        bank_account:{
            name:"",
            ifsc:"",
            account_number:""
        },
    }
    const buffer = Buffer.from(`${userName}:${password}`);
    const string = buffer.toString('base64');
    const authorization = `Basic ${string}`;
    var response = await axios({
        url: 'https://api.razorpay.com/v1/fund_accounts',
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
    fundDao.create(response.data);


};

async function allFund(req,res) {
    let result = await fundDao.findAll()
    res.send(result)
    console.log(result)
}

async function updateStatus(req,res) {
    let fund_id = "fa_J7jKWx8D0UMoq9"
    let result = await fundDao.updateFund(fund_id)
}

module.exports = {createFund,allFund,updateStatus};
