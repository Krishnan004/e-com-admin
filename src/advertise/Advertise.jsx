import React, { useState, useEffect } from 'react'
import  profile from "/image/profile.png";
import { Link } from 'react-router-dom';
import api from '../api/mainurl';

function Advertise() {
    const [product,setProduct]=useState([])

    // fetch advertisement product (product display in homePage)
    useEffect(()=>{
        const fetchData=async ()=>{
            const response=await api.get("/homeproduct")
            console.log(response.data)
            setProduct(response.data)
        }
        fetchData()
    },[])
    
    return (
        <div className="sm:flex sm:flex-wrap gap-8 justify-around p-8 ">
        {product.map(item=>
            <div className="bg-white rounded-xl sm:w-1/3 space-y-2 font-semibold">
                <h1 className="font-bold m-4">Product no: {item.product_id}</h1>
                <div className="flex justify-around border-b-2 p-2 sm:p-0" >
                    <img src={`https://e-com-server-1-9p85.onrender.com/upload/${item.product_src}`} alt="" className="w-36" />
                    <div>
                        <p>{item.product_name}</p>
                        <p>{item.design}</p>
                        <p>{item.price}</p>
                    </div>
                </div>
                <div className="flex justify-around" >
                    <button className="basis-1/2 border-r-2">Delete</button>
                    <Link to="/adedit" 
                    state={{
                        product:item
                    }}
                    >
                    <button className="basis-1/2">Edit</button>
                    </Link>
                </div>
            </div>
            )}
        </div>
    )
}

export default Advertise
