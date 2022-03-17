const express = require('express');
const bodyparser = require('body-parser')


// const payoutRouter = require('./routes/payoutRoutes.js')
// const dbRouter = require('./routes/dbRoutes.js')
const contactRouter = require('./routes/contactRoutes')
const fundRouter = require('./routes/fundRoutes')
const payoutRouter = require('./routes/payoutRoutes')

const app = express();
app.use(bodyparser.json())
// app.use('/payout', payoutRouter);
// app.use('/database',dbRouter);
app.use('/contacts',contactRouter);
app.use('/funds',fundRouter)
app.use('/payouts',payoutRouter)



module.exports = app;