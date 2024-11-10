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
import Login from './Login';
import Notify from './Notify';

const App = () => {
  const [open,setOpen]=useState(true)
  const [product,setProduct]=useState([])
  const [order,setOrder]=useState([])
  const [sales,setSales]=useState([])
  const [auth,setAuth]=useState(false);
  const[notify,setNotify]=useState(true);
  
  useEffect(() => {
    // fetch allProduct,orderSection,sales
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

    // verify authentication using stored token in localstorage
    const handleAuth = async () => {
      console.log("checking auth")
      try {
          const token = localStorage.getItem('token');

          if (!token) {
              throw new Error('Token not found');
          }

          const config = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          };

          const
              res = await api.get('/checkauth', config);
              setNotify(false)
          setAuth(true);
          console.log(res.data); // Assuming the API returns user data
      } catch (error) {
          console.error(error);
          // Handle error appropriately, e.g., redirect to login, show error message
          return null; // Or throw a custom error
      }
  };
    handleAuth();
    fetchProduct();
  }, []);
  return (
    <div className="text-customGray">
     <Router>
      <Header open={open} setOpen={setOpen}  auth={auth} setAuth={setAuth} />
      <Notify notify={notify} setNotify={setNotify} />
      <div className="sm:grid grid-cols-6">
        <NavBar open={open} setOpen={setOpen}/>
        <div className="sm:col-span-5 bg-slate-100 h-screen">
          <Routes>
            <Route path="/" element={<Dashbord product={product} sales={sales} />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/allproduct" element={<AllProduct product={product} setProduct={setProduct}  />} />
            <Route path="/newproduct" element={<Newproduct notify={notify} setNotify={setNotify} auth={auth} setAuth={setAuth} />} />
            <Route path="/stock" element={<Stock product={product} setProduct={setProduct} />} />
            <Route path="/ad" element={<Advertise/>} />
            <Route path="review" element={<Review notify={notify} setNotify={setNotify} auth={auth} setAuth={setAuth} />} />
            <Route path="/allproduct/:id"  element={<Editproduct notify={notify} setNotify={setNotify} auth={auth} setAuth={setAuth} />}/>
            <Route path="adedit" element={<AdEdit notify={notify} setNotify={setNotify} auth={auth} setAuth={setAuth} />} />
            <Route path="/order" element={<Order product={order} setProduct={setProduct} />} />
            <Route path="/login" element={<Login auth={auth} setAuth={setAuth} setNotify={setNotify}/>}/>
          </Routes>
        </div>
      </div>
      </Router>
    </div>
  )
}

export default App
