import { useState, useEffect } from "react";
import Router from "next/router";
import Header from "../../../components/quote/Header";
import quotes from "../../../data/quote.json"

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


import PaymentElementForm from "../../../components/PaymentElementForm";



const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPEPK}`);

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {

    const [clientSecret, setClientSecret] = useState("");


    useEffect(() => {

        fetch("/api/createPaymentIntent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
    }, []);

    const options = {
        clientSecret,
        appearance: {
            theme: 'flat',
            
            variables: {
                colorPrimary: '#635BFF',
                colorBackground: '#F6F9FC',
                colorText: '#30313d',
                colorDanger: '#df1b41',
                fontFamily: 'Ideal Sans, system-ui, sans-serif',
                spacingUnit: '4px',
                borderRadius: '10px',
                // See all possible variables below
              }
        }
    }

    return (
        <div className="bg-white">
            <Header />
            <div className="px-36">
                <h1 className="text-3xl justify-center font-extrabold text-gray-600 py-6 flex">
                Policy Total: £{quotes.quote[0].amount / 100}
                </h1>
                <h1 className="text-3xl justify-center font-extrabold text-indigo-600 py-6 flex">
                    <div className="text-left">
                    Please complete your payment details
                    </div>
                </h1>
            </div>
            <div className="flex items-center justify-center w-50 border-2 py-6 p-40">
                <div className="w-2/5">
                    {clientSecret && (
                        <Elements options={options} stripe={stripePromise} key={clientSecret}>
                            <PaymentElementForm />
                        </Elements>
                    )}
                </div>

            </div>
        </div>
    );
}
