const Sequelize = require("sequelize");


const db = new Sequelize("fund","root","password",{
    dialect : "mysql",
    host: "localhost"
});



module.exports = db;