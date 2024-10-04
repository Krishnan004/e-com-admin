import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllProduct = ({ product, setProduct }) => {
    const [products, setProducts] = useState([]);
    const uniqueCategories = ["default", ...new Set(product.map(item => item.category))];
    const [query, setQuery] = useState("");

    const handlequery = (data) => {
        return data.filter(item => 
            item.category.toLowerCase().includes(query) || 
            item.name.toLowerCase().includes(query)
        );
    };

    useEffect(() => {
        setProducts(product);
    }, [product]);

    const formatDate = (timestamp) => {
        return new Date(timestamp).toISOString().split('T')[0];
    };

    const handleFilter = (e) => {
        const selectorderby = e.target.value;
        if (selectorderby === 'default') {
            setProducts(product); // Show all products if 'default' is selected
        } else {
            const result = product.filter(item => item.category === selectorderby);
            setProducts(result);
        }
    };

    return (
        <div className="p-4 space-y-4">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between">
                <h1 className="font-bold text-xl">Product Details</h1>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    <input 
                        type="text" 
                        className="border border-customGray rounded-xl p-2" 
                        placeholder="Search products..." 
                        onChange={(e) => setQuery(e.target.value)} 
                    />
                    <Link to="/newproduct">
                        <button id="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                            +New Product
                        </button>
                    </Link>
                </div>
            </div>

            {/* Filter Section */}
            <div className="flex flex-col sm:flex-row justify-between bg-white p-4 border border-customGray space-y-2 sm:space-y-0">
                <div className="flex gap-4">
                    <p>Active</p>
                    <p>Inactive</p>
                    <p>Out of stock</p>
                </div>
                <div className="flex gap-4 items-center">
                    <button id="button" className="bg-gray-200 p-2 rounded-lg">Filter</button>
                    <select
                        className="border border-customGray p-2 rounded-lg"
                        onChange={handleFilter}
                    >
                        {uniqueCategories.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full bg-white border border-customGray text-sm sm:text-base">
                    <thead className="font-bold">
                        <tr>
                            <th className="p-2">SI.no:</th>
                            <th className="p-2">Posted on</th>
                            <th className="p-2">Product id</th>
                            <th className="p-2">Category</th>
                            <th className="p-2">Product</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Stock</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {handlequery(products).map((item, index) => (
                            <tr key={item.product_id}>
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{formatDate(item.created_at)}</td>
                                <td className="p-2">{item.product_id}</td>
                                <td className="p-2">{item.category}</td>
                                <td className="p-2">{item.name}</td>
                                <td className="p-2">{item.price}</td>
                                <td className="p-2">{item.stock}</td>
                                <td className="p-2 text-red-400">
                                    <Link to={{
                                        pathname: `/allproduct/${item.product_id}`,
                                    }} 
                                    state={{
                                        product_id: item.product_id,
                                        name: item.name,
                                        description: item.description,
                                        price: item.price,
                                        design: item.design,
                                        category: item.category,
                                        stock: item.stock,
                                        product_src: item.product_src
                                    }}>
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProduct;
