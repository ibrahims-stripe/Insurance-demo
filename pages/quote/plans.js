import Header from "../../components/quote/Header";
import Plans from "../../components/quote/Plans";

/* This example requires Tailwind CSS v2.0+ */
export default function plans({ data }) {
    return (
        <div className="bg-white">
            <Header />
            <Plans plans={data} />
        </div>
    );
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    let data = require("../../data/quote.json");
    // console.log("THE DATA", data);

    // Pass data to the page via props
    return { props: { data } };
}
