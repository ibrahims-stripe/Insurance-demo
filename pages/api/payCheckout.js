const stripe = require("stripe")(process.env.STRIPESK);

export default async function handler(req, res) {
    const { amount, destination } = req.body;

    try {
        // 5% in fees
        const session = await stripe.checkout.sessions.create({
            success_url: "https://localhost:3000/professional",
            cancel_url: "https://localhost:3000/professional",
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        product_data: {
                            name: "Insurance Premium",
                            description: "BW Insurance Home Cover",
                        },
                        currency: process.env.NEXT_PUBLIC_CURRENCY,
                        unit_amount: amount,
                    },
                },
            ],
            mode: "payment",
            payment_intent_data: {
                transfer_data: {
                    amount: Math.round(amount * 0.05),
                    destination: destination,
                },
            },
        });

        res.status(200).json(session);
    } catch (e) {
        console.error(e);
        res.status(500).json({ e });
    }
}
