const stripe = require("stripe")(process.env.STRIPESK);

export default async function handler(req, res) {
    try {
        const readers = await stripe.terminal.readers.list({
            limit: 3,
            device_type: 'bbpos_wisepos_e',
            limit: 100
        });

        const accounts = await stripe.accounts.list({
            limit: 100,
        });
        res.status(200).json({
            readers: readers.data?.filter(it => it.status === "online") || [],
            accounts: accounts.data?.filter(it => it.charges_enabled && it.payouts_enabled && it.type === "express") || [],
        })
    }catch(e){
        console.error(e);
        res.status(500).json({ e });
    }
}