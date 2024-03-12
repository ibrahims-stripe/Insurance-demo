import { useState } from "react";

import LoadingModal from "./LoadingModal";
import ApprovalModal from "./ApprovalModal";

/* This example requires Tailwind CSS v2.0+ */
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ClaimsTable({ claims }) {
    const [loadingOpen, setLoadingOpen] = useState(false);
    const [claimId, setClaimId] = useState("");
    const [transferId, setransferId] = useState("");
    const [payoutId, setpayoutId] = useState("");
    const [open, setOpen] = useState(false);

    async function approveClaim(id) {
        setLoadingOpen(true);
        try {
            const res = await fetch("/api/approveClaim", {
                body: JSON.stringify({
                    id,
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
            setransferId(result.transfer.id);
            setpayoutId(result.payout.id);
            setOpen(true);
        } catch (error) {
            console.dir(error);

            alert(error);
        }
        setLoadingOpen(false);
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <LoadingModal
                open={loadingOpen}
                onClose={() => {
                    return setLoadingOpen(false);
                }}
                message={"Approving claim and making payment"}
            />
            <ApprovalModal
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
                transferId={transferId}
                payoutId={payoutId}
                claimId={claimId}
            />
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                            <table
                                className="min-w-full border-separate"
                                style={{ borderSpacing: 0 }}
                            >
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                        >
                                            Claim Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                        >
                                            Amount
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                        >
                                            Customer
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                                        >
                                            <span className="sr-only">
                                                Approve
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {claims
                                        .slice(0)
                                        .reverse()
                                        .map((claim, claimIdx) => (
                                            <tr
                                                key={claim.id}
                                                className="hover:bg-slate-200"
                                            >
                                                <td
                                                    className={classNames(
                                                        claimIdx !==
                                                            claims.length - 1
                                                            ? "border-b border-gray-200"
                                                            : "",
                                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                                    )}
                                                >
                                                    {formatClaimId(claim.id)}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        claimIdx !==
                                                            claims.length - 1
                                                            ? "border-b border-gray-200"
                                                            : "",
                                                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
                                                    )}
                                                >
                                                    {claim.type}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        claimIdx !==
                                                            claims.length - 1
                                                            ? "border-b border-gray-200"
                                                            : "",
                                                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
                                                    )}
                                                >
                                                    ${claim.amount}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        claimIdx !==
                                                            claims.length - 1
                                                            ? "border-b border-gray-200"
                                                            : "",
                                                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                                    )}
                                                >
                                                    {claim.name}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        claimIdx !==
                                                            claims.length - 1
                                                            ? "border-b border-gray-200"
                                                            : "",
                                                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                                    )}
                                                >
                                                    <span
                                                        className={statusFormat(
                                                            claim.status
                                                        )}
                                                    >
                                                        {claim.status}
                                                    </span>
                                                </td>
                                                <td
                                                    className={classNames(
                                                        claimIdx !==
                                                            claims.length - 1
                                                            ? "border-b border-gray-200"
                                                            : "",
                                                        "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8"
                                                    )}
                                                >
                                                    {claim.status == "New" ? (
                                                        <button
                                                            onClick={() => {
                                                                approveClaim(
                                                                    claim.id
                                                                );
                                                            }}
                                                            className="text-indigo-600 hover:text-indigo-900 hover:opacity-150"
                                                        >
                                                            Approve
                                                        </button>
                                                    ) : (
                                                        ""
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                            <nav
                                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                aria-label="Pagination"
                            >
                                <div className="hidden sm:block">
                                    <p className="text-sm text-gray-700">
                                        Showing{" "}
                                        <span className="font-medium">1</span>{" "}
                                        to{" "}
                                        <span className="font-medium">10</span>{" "}
                                        of{" "}
                                        <span className="font-medium">20</span>{" "}
                                        results
                                    </p>
                                </div>
                                <div className="flex-1 flex justify-between sm:justify-end">
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        Previous
                                    </a>
                                    <a
                                        href="#"
                                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        Next
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const formatClaimId = (claimId) => {
    return claimId.split("-")[0];
};

const statusFormat = (status) => {
    if (status == "Paid")
        return "inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800";

    if (status == "New")
        return "inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800";

    if (status == "Declined")
        return "inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800";
};
