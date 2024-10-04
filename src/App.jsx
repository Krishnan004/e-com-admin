import React, { useState, useEffect } from 'react'
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashbord from './dashboard/Dashbord';
import NavBar from './NavBar';
import AllProduct from './product/AllProduct';
import Newproduct from './product/Newproduct';
import Stock from './stocks/Stock';
import Advertise from './advertise/Advertise';
import Review from './review/Review';
import api from './api/mainurl';
import Editproduct from './product/Editproduct';
import AdEdit from './advertise/AdEdit';
import Order from './orders/Order';
import Sales from './dashboard/Sales';

const App = () => {
  const [open,setOpen]=useState(true)
  const [product,setProduct]=useState([])
  const [order,setOrder]=useState([])
  const [sales,setSales]=useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseorder = await api.get('/order');
        const response = await api.get('/product');
        const responsesales = await api.get('/sales');
        console.log(sales);
        setSales(responsesales.data);
        setOrder(responseorder.data);
        setProduct(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    fetchProduct();
  }, []);
  return (
    <div className="text-customGray">
      <Header open={open} setOpen={setOpen}  />
      <Router>
      <div className="sm:grid grid-cols-6">
        <NavBar open={open} setOpen={setOpen}/>
        <div className="sm:col-span-5 bg-slate-100">
          <Routes>
            <Route path="/" element={<Dashbord product={product} sales={sales} />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/allproduct" element={<AllProduct product={product} setProduct={setProduct}  />} />
            <Route path="/newproduct" element={<Newproduct/>} />
            <Route path="/stock" element={<Stock product={product} setProduct={setProduct} />} />
            <Route path="/ad" element={<Advertise/>} />
            <Route path="review" element={<Review/>} />
            <Route path="/allproduct/:id"  element={<Editproduct/>}/>
            <Route path="adedit" element={<AdEdit/>} />
            <Route path="/order" element={<Order product={order} setProduct={setProduct} />} />
          </Routes>
        </div>
      </div>
      </Router>
    </div>
  )
}

export default App
