import React, { useState } from 'react';
import api from './api/mainurl';

const Login = ({auth,setAuth,setNotify}) => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [error, setError] = useState(false);
    const [user_id, setUser_id] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [cartItem, setCartItem] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { password, email } = values;

        try {
            const response = await api.post('/admin', { password, email });
            const res = response.data.user;

            if (res) {
                setUser_id(res.user_id);
                setUsername(res.username);
                setEmail(res.email);
                localStorage.setItem("token", response.data.token);

                const responsecart = await api.get('/cart', { params: { user_id: res.user_id } });
                setCartItem(responsecart.data);
                setAuth(true);
                setNotify(false);
                console.log(res);
            } else {
                throw new Error("Invalid user response");
            }
        } catch (error) {
            console.log("Error in fetching user_id", error.response ? error.response.data : error.message);
            setError(true);
        }
    };

    const handleChange = (e) => {
        const { value, id } = e.target;
        setValues(prev => ({ ...prev, [id]: value }));
        console.log(values);
    };

    return (
        <div className="flex flex-col items-center p-12 bg-gray-100">
        {auth? 
        (
            <div className="bg-white p-6 rounded-lg shadow-lg w-fit text-bold text-xl">
                <p>You are Authenticated sucessfully</p>
            </div>
            ):
        (
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>

                {error && <p className="text-red-500 text-sm mt-4">Login failed. Please check your credentials.</p>}
            </form>
            )}
        </div>
    );
};

export default Login;
