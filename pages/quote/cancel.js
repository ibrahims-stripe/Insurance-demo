import Header from "../../components/quote/Header";
/* This example requires Tailwind CSS v2.0+ */
export default function plans({ data }) {
    return (
        <div className="bg-white">
            <Header />
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                        Your purchase was cancelled.
                    </h1>
                    <p className="mt-5 text-xl text-gray-500 sm:text-center">
                        Please try again
                    </p>
                </div>
            </div>{" "}
        </div>
    );
}
