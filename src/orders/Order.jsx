import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Order({ product, setProduct }) {
    const [query, setQuery] = useState("");

    const handlequery = (data) => {
        return data.filter(item =>
            item.product_name.toLowerCase().includes(query) || 
            item.city.toLowerCase().includes(query)
        );
    };

    const formatedDate = (timestamp) => {
        return new Date(timestamp).toISOString().split('T')[0];
    };

    return (
        <div className="p-4 space-y-4">
            <div className="flex flex-col md:flex-row justify-between">
                <h1 className="font-bold text-xl">Order Details</h1>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <input 
                        type="text" 
                        className="border border-customGray rounded-xl p-2" 
                        placeholder="Search..." 
                        onChange={(e) => setQuery(e.target.value)} 
                    />
                    <Link to="/newproduct">
                        <button id="button" className="bg-blue-500 text-white p-2 rounded-lg">
                            +New Stock
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between bg-white p-2 border border-customGray space-y-2 md:space-y-0">
                <div className="flex items-center text-lg">
                    <p>Orders</p>
                </div>
                <div className="flex gap-4">
                    <button id="button" className="bg-gray-200 p-2 rounded-lg">Filter</button>
                    <button id="button" className="bg-gray-200 p-2 rounded-lg">Category</button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full bg-white border border-customGray text-sm md:text-base">
                    <thead className="font-bold">
                        <tr>
                            <th className="p-2">SI.no:</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Location</th>
                            <th className="p-2">Contact number</th>
                            <th className="p-2">Category</th>
                            <th className="p-2">Quantity</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {handlequery(product).map((item, index) => (
                            <tr key={item.product_id}>
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{formatedDate(item.created_at)}</td>
                                <td className="p-2">{item.first_name}</td>
                                <td className="p-2">{item.city}</td>
                                <td className="p-2">{item.mobile_number}</td>
                                <td className="p-2">{item.product_name}</td>
                                <td className="p-2">{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Order;
