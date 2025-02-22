const express = require('express');
const { processPayment, sendStripeApi } = require('../controller/paymentController');
const { isAuthenticatedUser } = require('../middleware/authenticate');
const router = express.Router();

router.route('/payment/process').post( isAuthenticatedUser, processPayment);
router.route('/stripeapi').get( isAuthenticatedUser, sendStripeApi);


module.exports = router;