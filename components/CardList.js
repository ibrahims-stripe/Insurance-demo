/* This example requires Tailwind CSS v2.0+ */
import { PencilIcon, XCircleIcon } from "@heroicons/react/solid";

const people = [
    {
        name: "MasterCard *** 8210 ",
        title: "Exp 04/2023",
        role: "Default",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl: "https://images.wsj.net/im-45496?width=1280&size=1",
    },
    {
        name: "STRIPE TEST BANK",
        title: "individual ••••6789 ",
        role: "Verified",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
            "https://freeiconshop.com/wp-content/uploads/edd/bank-flat.png",
    },
    // More people...
];

export default function CardList() {
    return (
        <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
            {people.map((person) => (
                <li
                    key={person.email}
                    className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
                >
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-sm font-medium truncate">
                                    {person.name}
                                </h3>
                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                    {person.role}
                                </span>
                            </div>
                            <p className="mt-1 text-gray-500 text-sm truncate">
                                {person.title}
                            </p>
                        </div>
                        <img
                            className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                            src={person.imageUrl}
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                                <a
                                    href="#"
                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                >
                                    <PencilIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3">Edit</span>
                                </a>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <a
                                    href="#"
                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                >
                                    <XCircleIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3">Delete</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
