const stripe = require("stripe")(process.env.STRIPESK);

export default async function handler(req, res) {
    const { amount, destination, reader } = req.body;

    try {
        // 5% in fees
        const paymentIntent = await stripe.paymentIntents.create({
            currency: process.env.NEXT_PUBLIC_CURRENCY,
            payment_method_types: ["card_present"],
            capture_method: "manual",
            application_fee_amount: Math.round(amount * 0.05),
            transfer_data: {
                destination,
            },
            amount: amount,
        });

        await stripe.terminal.readers.processPaymentIntent(reader, {
            payment_intent: paymentIntent.id,
        });

        res.status(200).json(paymentIntent);
    } catch (e) {
        console.error(e);
        res.status(500).json({ e });
    }
}
