const Razorpay = require('razorpay')

// Instantiate Cashfree Payouts
const payoutsInstance = new Razorpay({
  key_id: 'rzp_test_6MiKMSx0Yos6kD',
  key_secret: 'rwf58Kg40D0Qk6djwSk75hgT',
});

module.exports = payoutsInstance;