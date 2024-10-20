import React, { useState } from 'react';
import api from '../api/mainurl';

const Newproduct = ({notify,setNotify,auth,setAuth}) => {
    const [file, setFile] = useState(null);
    const [view,setView]=useState(null);
    const [newitem, setNewitem] = useState({
        name: '',
        design: '',
        price: '',
        stock: '',
        category: '',
        description: ''
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
        formData.append('name', newitem.name);
        formData.append('design', newitem.design);
        formData.append('price', newitem.price);
        formData.append('stock', newitem.stock);
        formData.append('category', newitem.category);
        formData.append('description', newitem.description);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            const response = await api.post('/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Product added successfully', response.data);
        } catch (error) {
            console.error('Error in adding new product', error);
        }}
        else{
            setNotify(true);
        }
    };

    return (
        <div className="p-8">
            <form onSubmit={handleSubmit} className="bg-white">
                <div className="grid p-8 gap-2">
                    <label htmlFor="category">Category</label>
                    <input className="border border-customGray rounded-lg w-48" type="text" name="category" id="category" onChange={handleChange} />
                    <label htmlFor="name">Product Name</label>
                    <input className="border border-customGray rounded-lg w-48" type="text" name="name" id="name" onChange={handleChange} />
                    <label htmlFor="design">Product Design</label>
                    <input className="border border-customGray rounded-lg w-48" type="text" name="design" id="design" onChange={handleChange} />
                    <label htmlFor="price">Price</label>
                    <input className="border border-customGray rounded-lg w-48" type="number" name="price" id="price" onChange={handleChange} />
                    <label htmlFor="description">Description</label>
                    <textarea className="border border-customGray rounded-lg w-1/2" name="description" id="description" cols="30" rows="5" onChange={handleChange}></textarea>
                </div>
                <div className="flex p-8 gap-4">
                    <div>
                        <p>Stock</p>
                        <input className="border border-customGray rounded-lg" type="number" name="stock" id="stock" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-4">
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
            <input id="file-upload" type="file" name=
            "file" onChange={handleFileChange} className="hidden" />
        </div>
                </div>
                <button id="button" type="submit">Continue</button>
            </form>
        </div>
    );
};

export default Newproduct;
