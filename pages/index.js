import LoginDialog from "../components/LoginButton";

const navigation = [
    { name: "Insurance", href: "#" },
    { name: "Conditions", href: "#" },
    { name: "Our company", href: "#" },
    { name: "Support", href: "#" },
];
const blogPosts = [
    {
        id: 1,
        title: "Protect your pet without weighing your pocket",
        href: "#",
        date: "Mar 16, 2022",
        datetime: "2022-03-16",
        category: { name: "Article", href: "#" },
        imageUrl:
            "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        preview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
        author: {
            name: "Roel Aufderehar",
            imageUrl:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            href: "#",
        },
        readingLength: "6 min",
    },
    {
        id: 2,
        title: "Total protection for your home",
        href: "#",
        date: "Mar 10, 2022",
        datetime: "2022-03-10",
        category: { name: "Insights", href: "#" },
        imageUrl:
            "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        preview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
        author: {
            name: "Brenna Goyette",
            imageUrl:
                "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            href: "#",
        },
        readingLength: "4 min",
    },
    {
        id: 3,
        title: "Car insurance comparison",
        href: "#",
        date: "Feb 12, 2022",
        datetime: "2022-02-12",
        category: { name: "Case Study", href: "#" },
        imageUrl:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        preview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
        author: {
            name: "Daniela Metz",
            imageUrl:
                "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            href: "#",
        },
        readingLength: "11 min",
    },
];
const footerNavigation = {
    support: [
        { name: "Phone numbers", href: "#" },
        { name: "Offices", href: "#" },
        { name: "Contact form", href: "#" },
        { name: "Search for agents", href: "#" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
    ],
    legal: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "#",
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Twitter",
            href: "#",
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
    ],
};

export default function Main() {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <div className="pt-8">
                    <nav
                        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 h-20"
                        aria-label="Global"
                    >
                        <div className="flex flex-1 items-center">
                            <div className="flex w-full items-center justify-between md:w-auto">
                                <a href="#">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        className="h-3 w-auto sm:h-10"
                                        src="/logo.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="hidden space-x-8 md:ml-10 md:flex">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-blue-900 hover:text-black"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:flex md:items-center md:space-x-6">
                            <a
                                href="/api/createProfessional"
                                className="text-base font-medium text-indigo-600 hover:text-black"
                            >
                                Become a Professional
                            </a>
                            <LoginDialog />
                        </div>
                    </nav>
                </div>

                <main>
                    <div className="bg-emerald-600 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                        <div className="mx-auto max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                                    <div className="lg:py-24">
                                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                            <span className="block">
                                                Insurance for you
                                            </span>
                                            <span className="block bg-gradient-to-r from-gray-200 to-yellow-200 bg-clip-text pb-3 text-transparent sm:pb-5">
                                                And your loved ones
                                            </span>
                                        </h1>
                                        <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                            Save up to a 30% combining our house
                                            and car insurance
                                        </p>
                                        <div className="mt-10 sm:mt-12">
                                            <a
                                                type="submit"
                                                href="/quote"
                                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white text-gray-900 px-5 py-3 font-medium hover:bg-indigo-600 hover:text-white"
                                            >
                                                Calculate your quote now
                                            </a>

                                            <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                                                Start your quote now by
                                                providing your email and card
                                                details. By filling this out you
                                                agree to our{" "}
                                                <a
                                                    href="#"
                                                    className="font-medium text-white"
                                                >
                                                    terms of service
                                                </a>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                        <img
                                            className="opacity-70	0 to-transparent rounded-xl shadow-xl w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial section */}
                    <div className="bg-gray-50 pb-16 lg:relative lg:z-10 lg:pb-0">
                        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <div className="relative lg:-my-8">
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                                />
                                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                                    <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                        <img
                                            className="object-cover lg:h-full lg:w-full"
                                            src="https://images.unsplash.com/photo-1580709690361-b3c8ad195206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                                    <blockquote>
                                        <div>
                                            <svg
                                                className="h-12 w-12 opacity-25"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <p className="mt-6 text-2xl font-medium">
                                                My house insurance covered the
                                                tornado that took my house last
                                                year. I can't imagine how my
                                                life would have been without it.
                                                The process was fast and I felt
                                                really supported.
                                            </p>
                                        </div>
                                        <footer className="mt-6">
                                            <p className="text-base font-medium text-emerald-600">
                                                Judith Black
                                            </p>
                                            <p className="text-base font-medium text-emerald-900">
                                                Hurricane Carol Association
                                            </p>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="relative bg-gray-900">
                        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                            <img
                                className="h-full w-full object-cover"
                                src="https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                                alt=""
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
                            />
                        </div>
                        <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                            <div className="md:ml-auto md:w-1/2 md:pl-10">
                                <h2 className="text-lg font-semibold text-gray-300">
                                    Full digital support
                                </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    File your claim
                                </p>
                                <p className="mt-3 text-lg text-gray-300">
                                    Once you fill your claim with your insurance
                                    number we will contact you and assign a
                                    professional to solve your problem in less
                                    than 48h.
                                </p>
                                <div className="mt-8">
                                    <div className="inline-flex rounded-md shadow">
                                        <a
                                            href="/claims"
                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-indigo-600 hover:text-white"
                                        >
                                            File a claim
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog section */}
                    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
                        <div className="relative">
                            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                                <h2 className="text-lg font-semibold text-cyan-600">
                                    Learn more about our insurances
                                </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Blog posts
                                </p>
                            </div>
                            <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
                                {blogPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                                    >
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-48 w-full object-cover"
                                                src={post.imageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-cyan-600">
                                                    <a
                                                        href={
                                                            post.category.href
                                                        }
                                                        className="hover:underline"
                                                    >
                                                        {post.category.name}
                                                    </a>
                                                </p>
                                                <a
                                                    href={post.href}
                                                    className="mt-2 block"
                                                >
                                                    <p className="text-xl font-semibold text-gray-900">
                                                        {post.title}
                                                    </p>
                                                    <p className="mt-3 text-base text-gray-500">
                                                        {post.preview}
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="mt-6 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <a href={post.author.href}>
                                                        <img
                                                            className="h-10 w-10 rounded-full"
                                                            src={
                                                                post.author
                                                                    .imageUrl
                                                            }
                                                            alt={
                                                                post.author.name
                                                            }
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        <a
                                                            href={
                                                                post.author.href
                                                            }
                                                            className="hover:underline"
                                                        >
                                                            {post.author.name}
                                                        </a>
                                                    </p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time
                                                            dateTime={
                                                                post.datetime
                                                            }
                                                        >
                                                            {post.date}
                                                        </time>
                                                        <span aria-hidden="true">
                                                            &middot;
                                                        </span>
                                                        <span>
                                                            {post.readingLength}{" "}
                                                            read
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="bg-gray-50" aria-labelledby="footer-heading">
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="mx-auto max-w-md px-4 pt-12 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-16">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="space-y-8 xl:col-span-1">
                                <img
                                    className="h-10"
                                    src="/logo.png"
                                    alt="Company name"
                                />
                                <p className="text-base text-gray-500">
                                    Making the world a better place through
                                    constructing elegant hierarchies.
                                </p>
                                <div className="flex space-x-6">
                                    {footerNavigation.social.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-gray-400 hover:text-gray-500"
                                        >
                                            <span className="sr-only">
                                                {item.name}
                                            </span>
                                            <item.icon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div className="mt-12 md:mt-0">
                                        <h3 className="text-base font-medium text-gray-900">
                                            Support
                                        </h3>
                                        <ul
                                            role="list"
                                            className="mt-4 space-y-4"
                                        >
                                            {footerNavigation.support.map(
                                                (item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className="text-base text-gray-500 hover:text-gray-900"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-base font-medium text-gray-900">
                                            Company
                                        </h3>
                                        <ul
                                            role="list"
                                            className="mt-4 space-y-4"
                                        >
                                            {footerNavigation.company.map(
                                                (item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className="text-base text-gray-500 hover:text-gray-900"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className="mt-12 md:mt-0">
                                        <h3 className="text-base font-medium text-gray-900">
                                            Legal
                                        </h3>
                                        <ul
                                            role="list"
                                            className="mt-4 space-y-4"
                                        >
                                            {footerNavigation.legal.map(
                                                (item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className="text-base text-gray-500 hover:text-gray-900"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 border-t border-gray-200 py-8">
                            <p className="text-base text-gray-400 xl:text-center">
                                &copy; 2022 The blue whale insurance, Inc. All
                                rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
