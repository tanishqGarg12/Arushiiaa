import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCreditCard, faUniversity, faMoneyCheckAlt, faBank } from '@fortawesome/free-solid-svg-icons';

const transactions = [
    {
        id: '880000909090908909809809809809809809809',
        date: '04:12 PM, 28 Feb',
        orderId: 'PYTM_BLINK_1234567890',
        paymentSource: 'Net Banking',
        gatewayName: 'Paytm',
        amount: '₹800',
        status: 'Success',
    },
    {
        id: '880000909090908909809809809809809809809',
        date: '04:12 PM, 28 Feb',
        orderId: 'PYTM_BLINK_1234567890',
        paymentSource: 'Net Banking',
        gatewayName: 'Paytm',
        amount: '₹800',
        status: 'Success',
    },
    {
        id: '880000909090908909809809809809809809809',
        date: '04:12 PM, 28 Feb',
        orderId: 'PYTM_BLINK_1234567890',
        paymentSource: 'EMI',
        gatewayName: 'Paytm',
        amount: '₹8,800',
        status: 'Success',
    },
    {
        id: '880000909090908909809809809809809809809',
        date: '04:12 PM, 28 Feb',
        orderId: 'PYTM_BLINK_1234567890',
        paymentSource: 'EMI',
        gatewayName: 'Paytm',
        amount: '₹800',
        status: 'Success',
    },
];

const TransactionPage = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen p-8">
            <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Payments</h1>
                <div className="flex justify-between bg-gray-100 p-4 rounded-md shadow-md mb-8">
                    <div>
                        <p className="font-medium text-gray-700"><span className="font-bold">Duration:</span> 1 May, 00:00 AM - 8 May, 11:30 PM</p>
                        <p className="font-medium text-gray-700"><span className="font-bold">Status:</span> Success</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700"><span className="font-bold">Total Payments:</span> ₹1,00,000</p>
                        <p className="font-medium text-gray-700"><span className="font-bold">Transactions:</span> 1200</p>
                    </div>
                </div>
                <div className="overflow-x-auto bg-white p-6 rounded-md shadow-md">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Transaction ID</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Date</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Order ID</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Payment Source</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Gateway Name</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Amount</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Success</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="bg-white odd:bg-gray-100 hover:bg-gray-200 transition-colors">
                                    <td className="py-3 px-4 flex items-center text-gray-700">
                                        {/* <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> */}
                                        {transaction.id}
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">{transaction.date}</td>
                                    <td className="py-3 px-4 text-gray-700">{transaction.orderId}</td>
                                    <td className="py-3 px-4 text-gray-700 flex items-center">
                                        <FontAwesomeIcon icon={transaction.paymentSource === 'Net Banking' ? faBank : faMoneyCheckAlt} className="text-blue-500 mr-2" />
                                        {transaction.paymentSource}
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">{transaction.gatewayName}</td>
                                    <td className="py-3 px-4 text-gray-700">{transaction.amount}</td>
                                    <td className="py-3 px-4 text-gray-700 flex items-center">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;
