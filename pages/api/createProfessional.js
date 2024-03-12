const stripe = require("stripe")(process.env.STRIPESK);

export default async function handler(req, res) {
    try {
        const account = await stripe.accounts.create({
            type: 'express',
            country: 'US',
        });
        //FIXME We should not have localhost added here directly. Fix it with some variable
        const accountLink = await stripe.accountLinks.create({
            account: account.id,
            refresh_url: `http://localhost:3000/professional`,
            return_url: `http://localhost:3000/professional`,
            type: 'account_onboarding',
        });
        res.redirect(302, accountLink.url)
    }catch(e){
        console.error(e);
        res.status(500).json({ e });
    }
}