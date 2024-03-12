import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import Link from "next/link";

export default function PaymentForm(props) {
    const [dashboardSelected, setDashboard] = useState(props.accounts[0]);
    const [qrUrl, setQRUrl] = useState();
    const setSelectedAccount = (e) => {
        setDashboard(e.target.value ?? null);
    };
    const amountRef = useRef();
    const accountRef = useRef();
    const generateQRCode = async (e) => {
        e.preventDefault();

        const amount = amountRef.current.valueAsNumber * 100;
        const destination = accountRef.current.value;
        if (!amount || !destination) return;

        const res = await fetch("/api/payCheckout", {
            body: JSON.stringify({
                amount,
                destination,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        const result = await res.json();
        if (res.status >= 400 && res.status < 600) {
            throw result.message;
        }
        setQRUrl(result.url);
    };
    return (
        <form className="space-y-8" onSubmit={props.onSubmit}>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <label
                    htmlFor="account"
                    className="block text-sm font-medium text-gray-700"
                >
                    Professional Account
                </label>
                <div className="flex">
                    <select
                        id="account"
                        name="account"
                        ref={accountRef}
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm flex-1"
                        defaultValue=""
                        onChange={setSelectedAccount}
                    >
                        <option key={"empty"} value={""}>
                            No Account
                        </option>
                        {props.accounts.map((it) => (
                            <option key={it.id} value={it.id}>
                                {it.id} -{" "}
                                {it.business_profile.name
                                    ? it.business_profile.name
                                    : it.business_profile.url}
                            </option>
                        ))}
                    </select>
                    {dashboardSelected ? (
                        <a
                            href={`/api/express/${dashboardSelected}`}
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Go to payment dashboard
                        </a>
                    ) : null}
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <label
                    htmlFor="reader"
                    className="block text-sm font-medium text-gray-700"
                >
                    Terminal reader
                </label>
                <select
                    id="reader"
                    name="reader"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    defaultValue=""
                >
                    {props.readers.map((it) => (
                        <option key={it.id} value={it.id}>
                            {it.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
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
                            ref={amountRef}
                            placeholder="1.00"
                            min="0.00"
                            step="any"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="sm:col-span-3">
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Charge with reader
                    </button>
                    <button
                        onClick={(e) => generateQRCode(e)}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Charge with QR
                    </button>
                </div>
                <div
                    style={{
                        height: "auto",
                        margin: "0 auto",
                        maxWidth: 250,
                        width: "100%",
                    }}
                >
                    {qrUrl ? (
                        <Link href={qrUrl}>
                            <a>
                                <QRCode
                                    style={{
                                        height: "auto",
                                        maxWidth: "100%",
                                        width: "100%",
                                    }}
                                    value={qrUrl}
                                    viewBox={`0 0 256 256`}
                                />
                                {/* checkout.com/c/... */}
                                {qrUrl.substring(8, 40)}...
                            </a>
                        </Link>
                    ) : null}
                </div>
            </div>
        </form>
    );
}
