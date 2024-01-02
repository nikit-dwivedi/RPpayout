// const Sequelize = require('sequelize')
const contactDao = require('../dao/contact.dao')
const axios = require('axios')

const userName = ""
const password = ""

async function createContact(req,res){
    const buffer = Buffer.from(`${userName}:${password}`);
    const string = buffer.toString('base64');
    const authorization = `Basic ${string}`;
    var response = await axios({
        url: 'https://api.razorpay.com/v1/contacts',
        method: 'post',
        headers: {
            Authorization: authorization,
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            reference_id: req.body.reference_id,
        } 
        // Request Body if you have    
    }).catch((err) => {
        console.log('ERROR ON HTTP REQUEST', err);
    });
    res.send(response.data)
    console.log(response.data)
    dataa=response.data;
    contactDao.create(dataa);


};


module.exports = {createContact};
