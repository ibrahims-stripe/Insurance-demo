const stripe = require("stripe")(process.env.STRIPESK);

export default async function handler(req, res) {
    const {intent} = req.query
    try {
        const data =  await stripe.paymentIntents.capture(intent);
        res.status(200).json(data)
    }catch(e){
        console.error(e);
        res.status(500).json({ e });
    }
}