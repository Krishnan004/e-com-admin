import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Stock({product,setProduct}) {
    const [query,setQuery]=useState("")

    const handlequery=(data)=>{
        return (data.filter(item=>item.category.toLowerCase().includes(query) ||item.name.toLowerCase().includes(query)))
    }
    
    const formatedDate=(timestamp)=>{
        return new Date(timestamp).toISOString().split('T')[0];
    }
    return (
        <div>
            <div className="p-4 space-y-4">
            <div className="flex justify-between  ">
                <h1 className="font-bold">Stock Details</h1>
                <div className="flex gap-4">
                    <input type="text" className="border border-customGray rounded-xl" onChange={(e)=>setQuery(e.target.value)}/>
                    <Link to="/newproduct">
                    <button id="button">+New Stock</button>
                    </Link>
                </div>
            </div>
            <div className="flex justify-between bg-white p-2 border border-customGray ">
                <div className="flex items-end text-xl">
                    <p>Stocks</p>
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
                        <td>Product id</td>
                        <td>category</td>
                        <td>Product</td>
                        <td>Updated on</td>
                        <td>Quantity</td>
                        <td>Action</td>
                    </tr>
                </thead>
                
                <tbody className="divide-y-2 ">
                {handlequery(product).map(item=>(
                    <tr key={item.product_id} >
                        <td>{item.product_id}</td>
                        <td>{item.product_id}</td>
                        <td>{item.category}</td>
                        <td>{item.name}</td>
                        <td>{formatedDate(item.created_at)}</td>
                        <td>{item.stock}</td>
                        <td className="text-red-400">edit</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Stock
