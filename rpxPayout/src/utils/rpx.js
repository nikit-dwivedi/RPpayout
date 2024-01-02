const Razorpay = require('razorpay')

// Instantiate Cashfree Payouts
const payoutsInstance = new Razorpay({
  key_id: '',
  key_secret: '',
});

module.exports = payoutsInstance;