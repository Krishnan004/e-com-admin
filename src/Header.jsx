import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import  profile from "../image/profile.png";
import { IoIosOptions } from "react-icons/io";

const Header = ({open,setOpen}) => {
    return (
        <div className="flex justify-between p-2 sm:p-8 items-center  bg-white">
            <div className="flex">
                <h1 className="text-2xl sm:text-4xl font-bold" >.cloths</h1>
            </div>
            {/* <input type="text" className="border-2 rounded-xl w-28 sm:basis-1/3" placeholder="Search"/> */}
            <div className="flex items-center divide-x-2 gap-4 ">
                <IoIosNotifications className="text-2xl" />
                <div className="flex">
                    <img src={profile} className="size-8 sm:size-12 rounded-full" alt=""/>
                    <div>
                    <label className="text-sm">Joseph</label>
                    <p className="text-xs">admin</p>
                    </div>
                </div>
            </div>
            <div className=" top-20 bg-slate-100 p-2 size-8 rounded-full sm:hidden">
            <button onClick={()=>setOpen(!open)}>
            <IoIosOptions />
            </button>
            </div>
        </div>

    )
}

export default Header
