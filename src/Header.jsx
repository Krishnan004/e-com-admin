import React from 'react';
import { IoIosNotifications, IoIosOptions } from "react-icons/io";
import profile from "../image/profile.png";
import { Link } from 'react-router-dom';

const Header = ({ open, setOpen, auth,setAuth }) => {
    return (
        <div className="">
        <div className="flex justify-between p-2 sm:p-8 items-center bg-white">
            <div className="flex">
                
                    <h1 className="text-2xl sm:text-4xl font-bold">.cloths</h1>
               
            </div>
            {/* <input type="text" className="border-2 rounded-xl w-28 sm:basis-1/3" placeholder="Search" /> */}
            <div className="flex items-center divide-x-2 gap-4">
                <IoIosNotifications className="text-2xl hover:animate-pulse" />
                {auth?(
                <div className="flex items-center gap-2">
                    <img src={profile} className="w-8 sm:w-12 rounded-full" alt="Profile" />
                    <div>
                        <label className="text-sm">Krishnan</label>
                        <p className="text-xs">admin</p>
                    </div>
                </div>
                 ):(
                    <div className="px-2">
                        <Link to="/login">
                            <button id="button">login</button>
                        </Link>
                    </div>
                )}
            </div>
            
            <div className="sm:hidden">
                <button onClick={() => setOpen(!open)} className="p-2 bg-slate-100 rounded-full">
                    <IoIosOptions className="text-2xl" />
                </button>
            </div>
        </div>
        </div>
    );
};

export default Header;
