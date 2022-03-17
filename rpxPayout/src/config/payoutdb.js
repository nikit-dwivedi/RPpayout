const Sequelize = require("sequelize");


const db = new Sequelize("payout","root","password",{
    dialect : "mysql",
    host: "localhost"
});



module.exports = db;