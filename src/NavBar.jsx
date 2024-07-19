import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { CgShutterstock } from "react-icons/cg";
import { SiExpensify } from "react-icons/si";
import { VscPreview } from "react-icons/vsc";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="flex flex-col gap-6 p-4">
        <Link to="/">
            <div className="nav">
                <MdOutlineDashboard />
                <label htmlFor="dashboard">Dashboard</label>
            </div>
            </Link>
            <Link to="/allproduct">
            <div className="nav">
                <IoBagHandleOutline />
                <label htmlFor="uploadproduct">Upload Products</label>
            </div>
            </Link>
            {/* <div className="nav">
                <BsShop />
                <label htmlFor="orders">Orders</label>
            </div>
            <div className="nav">
                <CiDeliveryTruck />
                <label htmlFor="deliverytracking">Delivery Tracking</label>
            </div> */}
            <Link to="/stock" >
            <div className="nav">
                <CgShutterstock />
                <label htmlFor="stocks">Stocks</label>
            </div>
            </Link>
            {/* <div className="nav">
                <SiExpensify />
                <label htmlFor="expense">Expense</label>
            </div> */}
            <Link to="review">
            <div className="nav">
                <VscPreview />
                <label htmlFor="review">Reviews & Ratings</label>
            </div>
            </Link>
            <Link to="/ad" >
            <div className="nav">
                <HiOutlineSpeakerphone />
                <label htmlFor="advertisement">Advertisement</label>
            </div>
            </Link>
        </div>
    )
}

export default NavBar
