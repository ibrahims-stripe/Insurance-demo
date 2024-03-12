import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import CardSection from "./CardSection";

export default function CardForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.createToken(
            elements.getElement(CardElement),
            { currency: process.env.NEXT_PUBLIC_CURRENCY }
        );
        console.log(result);

        if (result.error) {
            console.log(result.error.message);
        } else {
        }
    };

    return <CardSection />;
}
