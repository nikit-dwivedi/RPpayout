const Sequelize = require('sequelize');
const db = require('../config/funddb');


const Fund = db.define("fund", {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    entity:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    contact_id:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    account_type:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    ifsc:{
        type: Sequelize.STRING,
        allowNull: true},
    bank_name:{
        type: Sequelize.STRING,
        allowNull: true},
    name:{
        type: Sequelize.STRING,
        allowNull: true},
    account_name:{
        type: Sequelize.STRING,
        allowNull: true},
    active:{
        type:Sequelize.BOOLEAN,
        allowNull: true,
    },
      batch_id:{
      type:Sequelize.STRING,
      allowNull: true,
    },
      created_at:{
      type:Sequelize.INTEGER,
      allowNull: true,
    },
});

module.exports=Fund;