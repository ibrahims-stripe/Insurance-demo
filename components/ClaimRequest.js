import { useState } from "react";
import ClaimModal from "./ClaimModal";
import LoadingModal from "./LoadingModal";
import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CardSection from "./CardSection";
export default function ClaimRequest() {
    const [open, setOpen] = useState(false);
    const [loadingOpen, setLoadingOpen] = useState(false);

    const [claimId, setClaimId] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [cardId, setCardId] = useState("");
    const [tokenId, setTokenId] = useState("");
    const [accountId, setAccountId] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const registerClaim = async (event) => {
        // const stripeapi = loadstripe()
        event.preventDefault();
        setLoadingOpen(true);
        if (!stripe || !elements) {
            return;
        } else {
            console.log("the stripe and elements are not loaded");
        }
        console.log("WHY!!!!!!!");
        const carddetails = await stripe.createToken(
            elements.getElement(CardElement),
            { currency: process.env.NEXT_PUBLIC_CURRENCY }
        );
        console.log("token:  " + carddetails.token.id);

        try {
            const res = await fetch("/api/registerClaim", {
                body: JSON.stringify({
                    name: event.target.name.value,
                    email: event.target.email.value,
                    amount: event.target.amount.value,
                    type: event.target.type.value,
                    about: event.target.about.value,
                    cardtoken: carddetails.token.id,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const result = await res.json();

            if (res.status >= 400 && res.status < 600) {
                console.log(result);
                throw result.message;
            }

            setClaimId(result.claimId.split("-")[0]);
            setCustomerId(result.customer.id);
            setCardId(result.card.id);
            setTokenId(carddetails.token.id);
            setAccountId(result.account.id);
            setOpen(true);
        } catch (error) {
            alert(error);
        }
        setLoadingOpen(false);
    };

    return (
        <>
            <LoadingModal
                open={loadingOpen}
                onClose={() => {
                    return false;
                }}
                message={"Just a moment. We are submitting your claim"}
            />
            <ClaimModal
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
                customerId={customerId}
                tokenId={tokenId}
                accountId={accountId}
                cardId={cardId}
                claimId={claimId}
            />
            <form
                onSubmit={registerClaim}
                className="space-y-8 divide-y divide-gray-200"
            >
                <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                        <div>
                            <p className="mt-1 text-sm text-gray-500">
                                Please share the details of your claim
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="amount"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Amount
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        placeholder="1.00"
                                        min="0.00"
                                        step="any"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="type"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Type
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="type"
                                        name="type"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option>Automotive</option>
                                        <option>Work</option>
                                        <option>Travel</option>
                                        <option>Personal</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    About
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        defaultValue={""}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Write a few sentences about the claim.
                                </p>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="cover-photo"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Evidence pictures
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">
                                                or drag and drop
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Personal Information
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                So we can contact you about your claim
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Full name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>

                        <CardSection />
                    </div>

                    <div className="pt-8">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Terms & Conditions
                            </h3>
                        </div>
                        <div className="mt-6">
                            <fieldset>
                                <div className="mt-4 space-y-4">
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="tos"
                                                name="tos"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <p className="text-gray-500">
                                                I am confirming that I have read
                                                and agree with the{" "}
                                                <a
                                                    className="text-blue-500"
                                                    href="#"
                                                >
                                                    Terms & Conditions
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="ml-3 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit new claim
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
