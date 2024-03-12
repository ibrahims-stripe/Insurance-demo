import { CheckIcon } from "@heroicons/react/solid";

export default function Plans({ plans }) {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                        Here is your {plans.type} Insurance quote
                    </h1>
                    <p className="mt-5 text-xl text-gray-500 sm:text-center">
                        Choose between monthly installments or a one off
                        payments
                    </p>
                </div>
                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
                    {plans.quote.map((plan) => (
                        <div
                            key={plan.mode}
                            className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
                        >
                            <div className="p-6">
                                <h2 className="text-lg leading-6 font-medium text-gray-900">
                                    {plans.type} Insurance
                                </h2>
                                <p className="mt-4 text-sm text-gray-500">
                                    {plan.mode == "payment"
                                        ? "ANNUAL (one-off)"
                                        : "MONTHLY (12 installments)"}
                                </p>
                                <p className="mt-8">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                    £{plan.amount / 100}
                                    </span>{" "}
                                    <span className="text-base font-medium text-gray-500">
                                        {plan.mode == "payment"
                                            ? ""
                                            : "/ charged monthly"}
                                    </span>
                                    <div className="text-base font-medium text-gray-600">
                                        {plan.mode == "subscription" ? 
                                            `Remaining 11 installments for a total amount of £${Math.floor(plan.amount / 100 * 12)}`:
                                            "Pay now the full amount"
                                        }
                                    </div>
                                </p>
                                <a
                                    href={plan.url}
                                    className="mt-8 block w-full bg-indigo-800 border border-indigo-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-900"
                                >
                                    {plan.mode == "subscription" ? "Pay by installments".toUpperCase() : plan.mode.toUpperCase()}
                                </a>
                            </div>
                            <div className="pt-6 pb-8 px-6">
                                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                                    What's included
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {plan.includedFeatures.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex space-x-3"
                                        >
                                            <CheckIcon
                                                className="flex-shrink-0 h-5 w-5 text-green-500"
                                                aria-hidden="true"
                                            />
                                            <span className="text-sm text-gray-500">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
