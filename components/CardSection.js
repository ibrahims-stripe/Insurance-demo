/**
 * Use the CSS tab above to style your Element's container.
 */
import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#000000",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            boarder: "#000000",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },

        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

function CardSection() {
    return (
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Debit Card Details
                </label>
                <div className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </div>
            </div>
        </div>
    );
}

export default CardSection;
