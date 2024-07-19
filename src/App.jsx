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

const App = () => {
  const [product,setProduct]=useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get('/product');
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    fetchProduct();
  }, []);
  return (
    <div className="text-customGray">
      <Header/>
      <Router>
      <div className="grid grid-cols-6">
        <NavBar/>
        <div className="col-span-5 bg-slate-100">
          <Routes>
            <Route path="/" element={<Dashbord/>} />
            <Route path="/allproduct" element={<AllProduct product={product} setProduct={setProduct}  />} />
            <Route path="/newproduct" element={<Newproduct/>} />
            <Route path="/stock" element={<Stock/>} />
            <Route path="/ad" element={<Advertise/>} />
            <Route path="review" element={<Review/>} />
          </Routes>
        </div>
      </div>
      </Router>
    </div>
  )
}

export default App
