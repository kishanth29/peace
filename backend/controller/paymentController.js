// Import required modules
const catchAsyncError = require('../middleware/catchAsyncError');
const stripe = require('stripe');

// Hardcoded fake Stripe secret key for testing
const fakeStripeSecretKey = 'sk_test_abcdefghijklmnopqrstuvwxyz01234';

// Function to process payment
exports.processPayment = catchAsyncError(async (req, res, next) => {
    // Initialize Stripe with the fake secret key
    const stripeInstance = stripe(fakeStripeSecretKey);

    const paymentIntent = await stripeInstance.paymentIntents.create({
        amount: req.body.amount,
        currency: "usd",
        description: "TEST PAYMENT",
        metadata: { integration_check: "accept_payment"},
        shipping: req.body.shipping
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    });
});

// Function to send fake Stripe API key
exports.sendStripeApi = catchAsyncError(async (req, res, next) => {
    // Hardcoded fake Stripe API key for testing
    const fakeStripeApiKey = 'pk_test_abcdefghijklmnopqrstuvwxyz56789';

    res.status(200).json({
        stripeApiKey: fakeStripeApiKey
    });
});
