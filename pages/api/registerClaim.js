const stripe = require("stripe")(process.env.STRIPESK);
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export default async function handler(req, res) {
    try {
        const { customerAccount, name, email, amount, type, about, cardtoken } =
            req.body;

        let response = {};
        console.log("TokenID");
        console.log(cardtoken);
        //New stripe customer
        if (!customerAccount) {
            console.log("Creating new customer");
            const customer = await stripe.customers.create({
                name,
                email,
                description: `Customer claiming ${type} insurance`,
            });

            successCreation(customer);

            console.log(`Creating Card tok_mastercard`);
            const card = await stripe.customers.createSource(customer.id, {
                source: cardtoken,
            });
            successCreation(card);

            console.log(`Creating Account`);
            const newAccount = await stripe.accounts.create({
                type: "custom",
                business_type: "individual",
                country: "US",
                email,
                capabilities: {
                    transfers: { requested: true },
                },
                individual: {
                    first_name: name.split(" ")[0],
                    last_name: name.substr(name.indexOf(" ") + 1),
                    dob: {
                        day: "01",
                        month: "01",
                        year: "1901",
                    },
                    ssn_last_4: "0001",
                },
                tos_acceptance: {
                    service_agreement: "recipient",
                    date: parseInt(new Date().getTime() / 1000),
                    ip: "8.8.8.8",
                },
                settings: {
                    payouts: {
                        schedule: {
                            interval: "manual",
                        },
                    },
                },
                business_profile: {
                    url: "www.acme.com",
                },
            });

            successCreation(newAccount);

            console.log(`Creating Token`);
            const token = await stripe.tokens.create(
                {
                    customer: customer.id,
                },
                { stripeAccount: newAccount.id }
            );

            successCreation(token);

            console.log("Linking Token as External Account");
            const account = await stripe.accounts.update(newAccount.id, {
                external_account: token.id,
            });

            response = { customer, card, newAccount, account, token };
        }

        console.log("Creating Claim");
        const id = uuidv4();
        let claimsFile = require("../../data/claims.json");
        claimsFile.push({
            id,
            name,
            email,
            amount,
            type,
            about,
            account: customerAccount ? customerAccount : response.account.id,
            status: "New",
        });

        fs.writeFileSync(
            "./data/claims.json",
            JSON.stringify(claimsFile, null, 4)
        );

        response.claimId = id;

        console.log("Done!");

        res.status(200).json(response);
    } catch (error) {
        console.error(error.raw.message);
        res.status(500).json(error.raw);
    }
}

const successCreation = (object) => {
    console.log(`${object.object} = ${object.id} Created!`);
};
