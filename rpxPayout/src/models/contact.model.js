const Sequelize = require('sequelize');
const db = require('../config/contactdb.js');


const Contact = db.define("customer", {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    entity:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    contact:{
      type:Sequelize.STRING,
      allowNull: false,
      // values:['vender','customer','employee','self']
    },
    email:{
      type:Sequelize.STRING,
      allowNull: true,
    },
    active:{
      type:Sequelize.BOOLEAN,
      allowNull: true,
    },
    created_at:{
      type:Sequelize.INTEGER,
      allowNull: true,
    },
});

module.exports = Contact;
