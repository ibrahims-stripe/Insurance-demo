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
        }
    }

    return (
        <div className="bg-white">
            <Header />
            <div className="px-36">
                <h1 className="text-5xl text-center font-extrabold text-gray-900 py-12 flex">
                    Fill in your payment details
                </h1>
                <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center pb-4 flex justify-between">
                    <div className="text-left">
                        Total:
                    </div>
                    <div>
                        £{quotes.quote[0].amount / 100}
                    </div>
                </h1>
            </div>
            <div className="flex items-center justify-center border-2 py-12 p-36">
                <div className="w-3/5">
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
