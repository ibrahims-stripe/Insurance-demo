// pages/api/payment-intent.js
// Payment Intent for the PAYMENT ELEMENT 

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPESK);
let quotes = require("../../data/quote.json");

export default async function handler(req, res) {
  let quote = quotes.quote[0];

  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: "Get TEST" });
  } else if (req.method === 'POST') {
    // Handle POST request
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: quote.amount,
        currency: process.env.NEXT_PUBLIC_CURRENCY,
        customer: quote.customer,
        description: "Full Payment - Policy 12345",
        payment_method_types: ['card', 'paypal', 'revolut_pay', 'pay_by_bank'],
        metadata: {
          "Customer_id": "abc_12345",
          "Policy Number": "12345"
        },
        //payment_method_types: ['card', 'paypal', 'revolut_pay']
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
