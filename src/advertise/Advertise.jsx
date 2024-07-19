import React from 'react'
import  profile from "/image/profile.png";

function Advertise() {
    return (
        <div className="flex flex-wrap gap-8 justify-around p-8 ">
            <div className="bg-white rounded-xl w-1/3 space-y-2 font-semibold">
                <h1 className="font-bold m-4">Product no: 1</h1>
                <div className="flex justify-around border-b-2 " >
                    <img src={profile} alt="" className="w-36" />
                    <div>
                        <p>Product category</p>
                        <p>Men</p>
                    </div>
                </div>
                <div className="flex justify-around" >
                    <button className="basis-1/2 border-r-2">Delete</button>
                    <button className="basis-1/2">Edit</button>
                </div>
            </div>
            <div className="bg-white rounded-xl w-1/3 space-y-2 font-semibold">
                <h1 className="font-bold m-4">Product no: 1</h1>
                <div className="flex justify-around border-b-2 " >
                    <img src={profile} alt="" className="w-36" />
                    <div>
                        <p>Product category</p>
                        <p>Men</p>
                    </div>
                </div>
                <div className="flex justify-around" >
                    <button className="basis-1/2 border-r-2">Delete</button>
                    <button className="basis-1/2">Edit</button>
                </div>
            </div>
            <div className="bg-white rounded-xl w-1/3 space-y-2 font-semibold">
                <h1 className="font-bold m-4">Product no: 1</h1>
                <div className="flex justify-around border-b-2 " >
                    <img src={profile} alt="" className="w-36" />
                    <div>
                        <p>Product category</p>
                        <p>Men</p>
                    </div>
                </div>
                <div className="flex justify-around" >
                    <button className="basis-1/2 border-r-2">Delete</button>
                    <button className="basis-1/2">Edit</button>
                </div>
            </div>
            <div className="bg-white rounded-xl w-1/3 space-y-2 font-semibold">
                <h1 className="font-bold m-4">Product no: 1</h1>
                <div className="flex justify-around border-b-2 " >
                    <img src={profile} alt="" className="w-36" />
                    <div>
                        <p>Product category</p>
                        <p>Men</p>
                    </div>
                </div>
                <div className="flex justify-around" >
                    <button className="basis-1/2 border-r-2">Delete</button>
                    <button className="basis-1/2">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Advertise
