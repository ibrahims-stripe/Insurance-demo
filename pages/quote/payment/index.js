import { useState, useEffect } from "react";
import Router from "next/router";
import Header from "../../../components/quote/Header";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import PaymentElementForm from "../../../components/PaymentElementForm";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPEPK}`);

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
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
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center py-12">
                Fill in your payment details
            </h1>
            <div className="flex items-center justify-center border-2 p-36">
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
