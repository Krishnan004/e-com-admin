import React, { useState } from 'react'
import api from '../api/mainurl';
import { useLocation } from 'react-router';

const AdEdit = ({auth,setNotify}) => {
    const [file, setFile] = useState(null);
    const [view,setView]=useState(null);
    const location = useLocation();

    const {product}=location.state || {product:{}}
    console.log(product)
    const [newitem, setNewitem] = useState({
        produc_name: '',
        design: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewitem(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFile(file);
                setView(reader.result)
            }
            reader.readAsDataURL(file);
        }
        
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(auth){
        const formData = new FormData();
        formData.append('file', file);
        formData.append('product_name', newitem.product_name || product.product_name);
        formData.append('design', newitem.design || product.design);
        formData.append('price', newitem.price || product.price);
        formData.append('product_id', product.product_id);
    
        // Logging formData entries for debugging
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    
        try {
            const response = await api.put('/homeproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Product updated successfully', response.data);
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
            } else {
                console.error('Error message:', error.message);
            }
        }}
        else{
            setNotify(true);
        }
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="product_name">Product name</label>
            <input className="block border border-customGray rounded-lg w-48" type="text" name="product_name" value={product.product_name} onChange={handleChange}/>
            <label htmlFor="design">Design</label>
            <input className="block border border-customGray rounded-lg w-48" type="text" name="design" value={product.design} onChange={handleChange} />
            <label htmlFor="price">Price</label>
            <input className="block border border-customGray rounded-lg w-48" type="number" name="price" value={product.price} onChange={handleChange} />
            <label htmlFor="file-upload">Image</label>
            {file ? (
                <>
                    <img src={view} alt="Uploaded" className="size-24" />
                    <label htmlFor="file-upload" className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg">
                        Edit
                    </label>
                </>
            ) : (
                <>
                    <p className="mb-2 text-lg font-semibold text-gray-700">Upload image</p>
                    <label htmlFor="file-upload" className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg">
                        Choose File
                    </label>
                </>
            )}
            <input id="file-upload" type="file" onChange={handleFileChange} className="hidden" />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AdEdit
