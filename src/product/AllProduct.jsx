import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AllProduct = () => {
    const [product, setProduct] = useState([
        {
            product_id: "1",
            created: "2024-07-18",
            category: "Electronics",
            product: "Laptop",
            price: "1200",
            status: "In stock"
        },
        {
            product_id: "2",
            created: "2024-07-17",
            category: "Clothing",
            product: "T-shirt",
            price: "25",
            status: "Out of stock"
        },
        {
            product_id: "3",
            created: "2024-07-16",
            category: "Books",
            product: "Novel",
            price: "15",
            status: "In stock"
        },
        {
            product_id: "4",
            created: "2024-07-15",
            category: "Electronics",
            product: "Smartphone",
            price: "800",
            status: "In stock"
        },
        {
            product_id: "5",
            created: "2024-07-14",
            category: "Furniture",
            product: "Chair",
            price: "150",
            status: "Out of stock"
        },
        {
            product_id: "6",
            created: "2024-07-13",
            category: "Electronics",
            product: "Headphones",
            price: "50",
            status: "In stock"
        },
        {
            product_id: "7",
            created: "2024-07-12",
            category: "Food",
            product: "Chocolate",
            price: "5",
            status: "In stock"
        },
        {
            product_id: "8",
            created: "2024-07-11",
            category: "Clothing",
            product: "Jeans",
            price: "40",
            status: "Out of stock"
        },
        {
            product_id: "9",
            created: "2024-07-10",
            category: "Books",
            product: "Textbook",
            price: "80",
            status: "In stock"
        },
        {
            product_id: "10",
            created: "2024-07-09",
            category: "Electronics",
            product: "Tablet",
            price: "300",
            status: "Out of stock"
        }
    ]);
    
    return (
        <div className="p-4 space-y-4">
            <div className="flex justify-between  ">
                <h1 className="font-bold">Product Details</h1>
                <div className="flex gap-4">
                    <input type="text" className="border border-customGray rounded-xl"/>
                    <Link to="/newproduct">
                    <button id="button">+New Project</button>
                    </Link>
                </div>
            </div>
            <div className="flex justify-between bg-white p-4 border border-customGray ">
                <div className="flex gap-4">
                    <p>Active</p>
                    <p>Inctice</p>
                    <p>Out of stock</p>
                </div>
                <div className="flex gap-4">
                    <button id="button">Filter</button>
                    <button id="button">category</button>
                </div>
            </div>
            <table className="w-full bg-white border border-customGray ">
                <thead  className="font-bold">
                    <tr>
                        <td>SI.no:</td>
                        <td>Posted on</td>
                        <td>Product id</td>
                        <td>category</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                
                <tbody className="divide-y-2 ">
                {product.map(item=>(
                    <tr>
                        <td>{item.product_id}</td>
                        <td>{item.created}</td>
                        <td>{item.product_id}</td>
                        <td>{item.category}</td>
                        <td>{item.product}</td>
                        <td>{item.price}</td>
                        <td>{item.status}</td>
                        <td className="text-red-400">edit</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllProduct
