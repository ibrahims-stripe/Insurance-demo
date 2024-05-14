const stripe = require("stripe")(process.env.STRIPESK);
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export default async function handler(req, res) {
    try {
        const { customerAccount, name, email, country, type } = req.body;

        //New stripe customer
        console.log("Creating new customer");
        const customer = await stripe.customers.create({
            name,
            email,
            description: `Customer Requesting Quote for ${type} insurance`,
            metadata: {
                type,
                country,
            },
        });

        successCreation(customer);

        console.log("Creating Quote");
        const id = uuidv4();
        const quote = await createQuote(customer.id, type, name);
        const response = {
            id,
            type,
            quote,
            customer,
        };

        fs.writeFileSync(
            "./data/quote.json",
            JSON.stringify(response, null, 4)
        );

        console.log("Done!");

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
}

const successCreation = (object) => {
    console.log(`${object.object} ${object.id} Created!`);
};

const createQuote = async (customerId, type, name) => {
    const min = 5000;
    let max = 150000;

    if (type !== "Automotive") {
        max = 50000;
    }

    console.log("Calculating Insurance Amount");
    const amount = Math.floor(Math.random() * (max - min + 1)) + min;

    try {
        console.log("Creating Product");
        const product = await stripe.products.create({
            name: `${type} Insurance for ${name}`,
        });

        console.log(`Product ${product.id} created`);
        console.log("Creating Price");

        const price = await stripe.prices.create({
            unit_amount: Math.floor(amount / 12),
            currency: process.env.NEXT_PUBLIC_CURRENCY,
            recurring: { interval: "month" },
            product: product.id,
        });

        console.log(`Price ${price.id} created`);

        console.log("Creating Subscription Checkout Session");
        const subsSession = await stripe.checkout.sessions.create({
            billing_address_collection: "auto",
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                },
            ],
            mode: "subscription",
            customer: customerId,
            success_url: `http://localhost:3000/quote/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `http://localhost:3000/quote/cancel`,
        });

        console.log(`Subscription ${subsSession.id} created`);

        console.log("Creating Annual Checkout Session");
        const session = await stripe.checkout.sessions.create({
            billing_address_collection: "auto",
            line_items: [
                //  ------- OLD IMPLEMENTATION ------------
                // {
                //     name: `Annual ${type} insurance`,
                //     amount,
                //     quantity: 1,
                //     currency: "usd",
                //     description: `Annual payment, ${type} Insurance for customer ${customerId}`,
                // },
                //  ------- NEW IMPLEMENTATION ------------
                {
                    price_data: {
                        currency: process.env.NEXT_PUBLIC_CURRENCY,
                        unit_amount: amount,
                        product_data: {
                            name: `Annual ${type} insurance`,
                            description: `Annual payment, ${type} Insurance for ${name}`,
                        },
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            customer: customerId,
            success_url: `http://localhost:3000/quote/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `http://localhost:3000/quote/cancel`,
        });

        console.log(`Annual Checkout Session ${session.id} created`);
        return [
            {
                amount,
                customer: customerId,
                mode: "payment",
                url: "payment",
                includedFeatures: [
                    "Liability Coverage",
                    "Collision Coverage",
                    "Medical Payments Coverage",
                ],
            },
            {
                amount: Math.floor(amount / 12),
                mode: "subscription",
                customer: customerId,
                url: subsSession.url,
                includedFeatures: [
                    "Liability Coverage",
                    "Collision Coverage",
                    "Medical Payments Coverage",
                    "Cancel Anytime",
                ],
            },
        ];
    } catch (error) {
        console.error(error);
    }
};
