import React, { useState } from 'react'
import { IoShirtOutline } from "react-icons/io5";
import Sales from './Sales';
import { GiAmpleDress } from "react-icons/gi";
import { ImMug } from "react-icons/im";

const Dashbord = () => {
    const [orders, setOrders] = useState([
        {
            order_id: '12345',
            name: 'John Doe',
            location: {
                address_line1: '123 Main St',
                address_line2: 'Apt 4B',
                city: 'New York',
                state: 'NY',
                zip_code: '10001',
                country: 'USA'
            },
            mobile_number: '123-456-7890',
            product: 'T-shirt'
        },
        {
            order_id: '12346',
            name: 'Jane Smith',
            location: {
                address_line1: '456 Elm St',
                address_line2: '',
                city: 'Los Angeles',
                state: 'CA',
                zip_code: '90001',
                country: 'USA'
            },
            mobile_number: '987-654-3210',
            product: 'Cup'
        },
        {
            order_id: '12347',
            name: 'Alice Johnson',
            location: {
                address_line1: '789 Oak St',
                address_line2: 'Suite 101',
                city: 'Chicago',
                state: 'IL',
                zip_code: '60601',
                country: 'USA'
            },
            mobile_number: '555-123-4567',
            product: 'Hat'
        },
        {
            order_id: '12348',
            name: 'Bob Brown',
            location: {
                address_line1: '321 Maple St',
                address_line2: '',
                city: 'Houston',
                state: 'TX',
                zip_code: '77001',
                country: 'USA'
            },
            mobile_number: '444-987-6543',
            product: 'Shoes'
        },
        {
            order_id: '12349',
            name: 'Carol White',
            location: {
                address_line1: '654 Pine St',
                address_line2: 'Apt 2A',
                city: 'Miami',
                state: 'FL',
                zip_code: '33101',
                country: 'USA'
            },
            mobile_number: '222-333-4444',
            product: 'Bag'
        }
    ]);
    const [lowStockProducts, setLowStockProducts] = useState([
        {
            product_id: 'P123',
            product: 'T-shirt',
            stock: 5
        },
        {
            product_id: 'P124',
            product: 'Cup',
            stock: 2
        },
        {
            product_id: 'P125',
            product: 'Hat',
            stock: 3
        },
        {
            product_id: 'P126',
            product: 'Shoes',
            stock: 4
        },
        {
            product_id: 'P127',
            product: 'Bag',
            stock: 1
        }
    ]);
    return (
        <div className="">
            <div className="grid grid-cols-4 gap-4 p-7">
                <div className="p-8 flex gap-2 border border-customGray rounded-lg bg-white">
                    <IoShirtOutline size={50} />
                    <div className="font-semibold">
                        <p >500</p>
                        <p className="font-thin">Men</p>
                    </div>
                </div>
                <div className="p-8 flex gap-2 border border-customGray rounded-lg bg-white">
                    <GiAmpleDress size={50} />
                    <div className="font-semibold">
                        <p >500</p>
                        <p className="font-thin">Men</p>
                    </div>
                </div>
                <div className="p-8 flex gap-2 border border-customGray rounded-lg bg-white">
                    <ImMug size={50} />
                    <div className="font-semibold">
                        <p >500</p>
                        <p className="font-thin">Men</p>
                    </div>
                </div>
                <div className="p-8 flex gap-2 border border-customGray rounded-lg bg-white">
                    <ImMug size={50} />
                    <div className="font-semibold">
                        <p >500</p>
                        <p className="font-thin">Men</p>
                    </div>
                </div>
            </div>
            <div>
                <Sales />
            </div>

            <div className="flex p-6">

                <div className="border border-black bg-white rounded-xl drop-shadow-md w-2/3 table-auto m-2">
                    <div className="flex justify-between p-2">
                        <h1>Orders</h1>
                        <button id="button">
                            View All
                        </button>
                    </div>
                    <table className="w-full">
                        <thead className="border-y">
                            <tr>
                                <th className=" px-4 py-2">S.no:</th>
                                <th className=" px-4 py-2">Name</th>
                                <th className=" px-4 py-2">Location</th>
                                <th className=" px-4 py-2">Mobile number</th>
                                <th className=" px-4 py-2">Order</th>
                            </tr>
                        </thead>
                        <tbody className="text-center divide-y-2">
                            {orders.map((item, index) => (
                                <tr key={item.order_id}>
                                    <td className=" px-4 py-2">{index + 1}</td>
                                    <td className=" px-4 py-2">{item.name}</td>
                                    <td className=" px-4 py-2">{item.location.city}</td>
                                    <td className=" px-4 py-2">{item.mobile_number}</td>
                                    <td className=" px-4 py-2">{item.product}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="border border-black bg-white rounded-xl drop-shadow-md w-1/3 table-auto m-2">
                <div className="flex justify-between p-2">
                        <h1>Orders</h1>
                        <button id="button">
                            View All
                        </button>
                    </div>
                    <table className="w-full">
                        <thead className="border-y">
                            <tr >
                                <th className=" px-4 py-2">Product ID</th>
                                <th className=" px-4 py-2">Product</th>
                                <th className=" px-4 py-2">Stock</th>
                            </tr>
                        </thead>
                        <tbody className="text-center divide-y-2">
                            {lowStockProducts.map((item) => (
                                <tr key={item.product_id}>
                                    <td className=" px-4 py-2">{item.product_id}</td>
                                    <td className=" px-4 py-2">{item.product}</td>
                                    <td className=" px-4 py-2">{item.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default Dashbord
