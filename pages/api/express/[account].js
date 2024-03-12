const stripe = require("stripe")(process.env.STRIPESK);

export default async function handler(req, res) {
    const {account} = req.query
   
    try {
        const {url} = await stripe.accounts.createLoginLink(account)
        res.redirect(302, url);
    }catch(e){
        console.error(e);
        res.status(500).json({ e });
    }
}