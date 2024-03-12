import PrivateHeader from "../components/PrivateHeader";
import LoadingModal from "../components/LoadingModal";
import { useEffect, useState } from "react";
import PaymentForm from "../components/PaymentForm";
import { useInterval } from "../components/utils/useInterval";
import PaymentSuccessModal from "../components/PaymentSuccessModal"

const user = {
    name: "Tanya Adam",
    email: "tanya@example.com",
    imageUrl: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80&q=80",
};
const navigation = [
    { name: "Charge customer", href: "#", current: true },
];

export default function Professional() {
    const [data, setData] = useState({accounts: [], readers: []})
    const [isLoading, setLoading] = useState(false)
    const [paymentRunning, setPaymentRunning] = useState(null)
    const [isSuccessDisplayed, setSuccessPayment] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/terminalInfo')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    useInterval(() => {
        if(!paymentRunning) {
            return
        }
        if(isSuccessDisplayed){
            return
        }

        fetch(`/api/paymentInfo/${paymentRunning}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 'requires_capture'){
                    setLoading(true)
                    fetch(`/api/capture/${paymentRunning}`)
                        .then((res) => res.json())
                        .then((res) => {
                            setLoading(false)
                        })
                }
                if(data.status === 'succeeded'){
                    setPaymentRunning(null)
                    setSuccessPayment(true)
                }
            })
    }, 1000*3) // 4 secs

    const submitTerminalPayment = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            const res = await fetch("/api/payTerminal", {
                body: JSON.stringify({
                    amount: e.target.amount.valueAsNumber * 100,
                    reader: e.target.reader.value,
                    destination: e.target.account.value,
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
            setPaymentRunning(result.id);
        }catch(e) {
           console.log(e)
        }
        setLoading(false)
    }

    return (
        <>
            <LoadingModal
                open={isLoading}
                onClose={() => {
                    setLoading(false)
                }}
                message={"Just a moment while we execute your request ..."}
            />
            <PaymentSuccessModal
                open={isSuccessDisplayed}
                onClose={() => {
                    setSuccessPayment(false)
                }}
                payment={paymentRunning}
            />
            <PrivateHeader 
                navigation={navigation}
                user={user}
            />
            <div className="py-10">
                <header>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 p-5 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900">
                            Charge customer
                        </h1>
                        <label className="text-gray-600">Blue Whale will keep a 5% fee for providing the contract with the insured</label>
                    </div>
                </header>
                <main>
                    <PaymentForm 
                        readers={data.readers}
                        accounts={data.accounts}
                        onSubmit={submitTerminalPayment}
                    />
                </main>
            </div>
        </>
    );
}
