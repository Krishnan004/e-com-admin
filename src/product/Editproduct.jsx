import React, { useState, useEffect } from 'react'
import api from '../api/mainurl';
import { useLocation } from 'react-router';

const Editproduct = ({auth,setAuth,notify,setNotify}) => {
    const location = useLocation();
    const { product_id, name, price, description, design, category, stock,product_src } = location.state || { product_id: "", name: "", price: "", description: "", design: "", category: "", stock: "" ,product_src:"" };
    const [newitem, setNewitem] = useState({product_id, name, price, description, design, category, stock });
    const [file,setFile]=useState(null)
    const [view,setView]=useState(null)
    useEffect(() => {
        console.log(newitem);
    }, [newitem]);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setNewitem(prev => ({ ...prev, [name]: value }));
    }
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
        const formData = new FormData();
        if(auth){
        if (file) {
            formData.append('file', file);
            console.log(file)
        } else{
            formData.append('product_src', product_src);
        }
        formData.append('name', newitem.name);
        formData.append('design', newitem.design);
        formData.append('price', newitem.price);
        formData.append('stock', newitem.stock);
        formData.append('category', newitem.category);
        formData.append('description', newitem.description);
        formData.append('product_id', newitem.product_id);
        try {
            const response = await api.put("/product", formData);
            console.log("Product updated successfully", response.data);
        } catch (error) {
            console.error("Error in adding new product", error);
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
                    <input className="border border-customGray rounded-lg w-48" type="text" name="category" id="category" value={newitem.category} onChange={handleChange} />
                    <label htmlFor="name">Product Name</label>
                    <input className="border border-customGray rounded-lg w-48" type="text" name="name" id="name" value={newitem.name} onChange={handleChange} />
                    <label htmlFor="design">Product Design</label>
                    <input className="border border-customGray rounded-lg w-48" type="text" name="design" id="design" value={newitem.design} onChange={handleChange} />
                    <label htmlFor="price">Price</label>
                    <input className="border border-customGray rounded-lg w-48" type="number" name="price" id="price" value={newitem.price} onChange={handleChange} />
                    <label htmlFor="description">Description</label>
                    <textarea className="border border-customGray rounded-lg w-1/2" name="description" id="description" cols="30" rows="5" value={newitem.description} onChange={handleChange}></textarea>
                </div>
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
                <button id="button" type="submit">Continue</button>
            </form>
        </div>
    )
}

export default Editproduct;
