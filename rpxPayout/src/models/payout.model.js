const Sequelize = require('sequelize');
const db = require('../config/payoutdb');


const payoutdb = db.define("fund", {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    entity:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    fund_account_id:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    amount:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    currency:{
        type: Sequelize.STRING,
        allowNull: true},
    fees:{
        type: Sequelize.INTEGER,
        allowNull: true},
    tax:{
        type: Sequelize.INTEGER,
        allowNull: true},
    status:{
        type: Sequelize.STRING,
        allowNull: true},
    utr:{
        type:Sequelize.STRING,
        allowNull: true,
    },
    mode:{
        type:Sequelize.STRING,
        allowNull: true,
    },
    purpose:{
        type:Sequelize.STRING,
        allowNull: true,
    },
    reference_id:{
        type:Sequelize.STRING,
        allowNull: true,
    },
    narration:{
        type:Sequelize.STRING,
        allowNull: true,
    },
    batch_id:{
        type:Sequelize.STRING,
        allowNull: true,
    },
    status_details:{
        type:Sequelize.STRING,
        allowNull: true,
    },
    created_at:{
        type:Sequelize.INTEGER,
        allowNull: true,
    }
});

module.exports=payoutdb;