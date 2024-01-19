import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const PriceCard = ({ plan }) => {
    const navigate = useNavigate();

    const handlePayment = async (amount, plan) => {
        const planName = plan;
        // Make a request to your server to create a Razorpay order
        const response = await axios.post('http://64.227.177.24:3001/create-order',
            {
                amount: amount * 100
            });
        const order = response.data;

        const options = {
            key: 'rzp_test_GxDb6mfIvPQTXw', // Replace with your Razorpay Key
            amount: order.amount,
            currency: order.currency,
            name: 'KernalAs',
            description: 'Purchase Description',
            order_id: order.id,
            handler: function (response) {
                const data = { ...response, amount, createdAt: order.created_at, planName }
                navigate("/payment/success", { state: data });
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };
    return (
        <div class="flex flex-col bg-white rounded-3xl h-3/5 mb-2">
            <div class="px-6 py-8 sm:p-10 sm:pb-6 flex-1">
                <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div>

                        <h2
                            class="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
                        >
                            {plan.name}
                        </h2>
                        {plan.features.map((feature) => {
                            return (

                                <div class="flex gap-2 w-80 ">
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        class="w-5 h-5 text-blue-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clip-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span class="text-slate-500 text-md">{feature}</span>
                                </div>

                            )

                        })}

                    </div>

                </div>
            </div>
            <div class=" px-6 pb-8 sm:px-8 ">
                <div class="mt-6">
                    <p>
                        <span class="text-5xl font-light tracking-tight text-black">
                            ₹{plan.price}
                        </span>
                        <span class="text-base font-medium text-gray-500"> /mo </span>
                    </p>
                </div>
                <button
                    aria-describedby="tier-company"
                    class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    onClick={() => { handlePayment(plan.price, plan.name) }}
                >
                    Get started
                </button>
            </div>
        </div>

    )
}

export default PriceCard
