const Sequelize = require("sequelize");


const db = new Sequelize("contact","root","password",{
    dialect : "mysql",
    host: "localhost"
});



module.exports = db;