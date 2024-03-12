const stripe = require("stripe")(process.env.STRIPESK);
import fs from "fs";

export default async function handler(req, res) {
    try {
        const { id } = req.body;
        let claimsFile = require("../../data/claims.json");
        const claimIndex = claimsFile.findIndex((x) => {
            return x.id == id;
        });

        console.log(`index is ${id}`);
        let claim = claimsFile[claimIndex];

        console.log(claim);

        console.log(`Starting transfer to ${claim.account}`);
        const transfer = await stripe.transfers.create({
            amount: claim.amount * 100,
            currency: process.env.NEXT_PUBLIC_CURRENCY,
            destination: claim.account,
            metadata: { claim: claim.id, type: claim.type },
        });

        console.log(`Transfer completed ${transfer.id}`);
        claim.status = "Approved";

        console.log("Creating Payout");
        const payout = await stripe.payouts.create(
            {
                amount: claim.amount * 100,
                currency: process.env.NEXT_PUBLIC_CURRENCY,
                method: "instant",
            },
            { stripeAccount: claim.account }
        );

        if (payout.id) {
            console.log(`Payout completed ${payout.id}`);
            claim.status = "Paid";
        }

        claimsFile[claimIndex] = claim;

        fs.writeFileSync(
            "./data/claims.json",
            JSON.stringify(claimsFile, null, 4)
        );

        res.status(200).json({ payout, transfer, claimId: id });
    } catch (error) {
        console.error(error.raw.message);
        res.status(500).json(error.raw);
    }
}

const successCreation = (object) => {
    console.log(`${object.object} = ${object.id} Created!`);
};
