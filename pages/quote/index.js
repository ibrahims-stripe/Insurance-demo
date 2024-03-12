import { useState } from "react";
import Header from "../../components/quote/Header";
import Router from "next/router";
import LoadingModal from "../../components/LoadingModal";

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    const [loadingOpen, setLoadingOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const getQuote = async (event) => {
        event.preventDefault();
        setLoadingOpen(true);

        try {
            const res = await fetch("/api/createQuote", {
                body: JSON.stringify({
                    name: event.target.name.value,
                    email: event.target.email.value,
                    type: event.target.type.value,
                    country: event.target.country.value,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            if (res.status >= 400 && res.status < 600) {
                throw res.body;
            }
            const result = await res.json();
            setLoadingOpen(false);
            Router.push("/quote/plans");
        } catch (error) {
            console.error(error);
            alert("Error Check Logs");
        }
    };

    return (
        <div className="bg-white">
            <LoadingModal
                open={loadingOpen}
                onClose={() => {
                    return false;
                }}
                message={"Just a moment. We are preparing your quote"}
            />
            <Header />
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                        Insurance Quote
                    </h1>
                    <p className="mt-5 text-xl text-gray-500 sm:text-center">
                        Fill up your details to get a quote
                    </p>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={getQuote}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="country"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>United Kingdom</option>
                                                <option>Italy</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="type"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Insurance Type
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
                                                    <option>Home</option>
                                                    <option>Personal</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-span-6">
                                            <label
                                                htmlFor="street-address"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Street address
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label
                                                htmlFor="city"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                                htmlFor="region"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                State / Province
                                            </label>
                                            <input
                                                type="text"
                                                name="region"
                                                id="region"
                                                autoComplete="address-level1"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                                htmlFor="postal-code"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 w-full border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Get quote
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
