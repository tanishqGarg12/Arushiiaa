import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DarkModeContext } from '../DarkModeContext'; // Import your context

const Signup = () => {
    const { darkMode } = useContext(DarkModeContext); // Access dark mode context
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('user'); // Default to 'user'
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSignup = async () => {
        if (!firstName || !lastName || !username || !role || !email || !password || !confirmPassword || !phone) {
            toast.error("Please fill in all fields!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Slide
            });
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Slide
            });
            return;
        }

        try {
            // Prepare form data
            const formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('username', username);
            formData.append('role', role);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('password', password);
            if (image) {
                formData.append('image', image);
            }

            // Replace with your actual API endpoint
            toast.success("Account created", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Slide
            });
            // const response = await axios.post('/api/signup', formData);
            console.log('Signup successfully');
            // Handle successful signup (e.g., redirect or store user info)
        } catch (err) {
            toast.error("Signup failed. Please try again.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Slide
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center p-4">
            <div className={`rounded-lg shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Sign Up</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 ${darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'border-gray-300'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 ${darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'border-gray-300'}`}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 ${darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'border-gray-300'}`}
                    />
                </div>
                <div className="mb-4">
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 ${darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'border-gray-300'}`}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 ${darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'border-gray-300'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 ${darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'border-gray-300'}`}
                        />
                    </div>
                </div>
                <div className="mb-4 relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 pr-10 ${darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'border-gray-300'}`}
                    />
                    <span
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                            className="text-blue-500"
                        />
                    </span>
                </div>
                <div className="mb-4 relative">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 pr-10 ${darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'border-gray-300'}`}
                    />
                    <span
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        <FontAwesomeIcon
                            icon={showConfirmPassword ? faEyeSlash : faEye}
                            className="text-blue-500"
                        />
                    </span>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">
                        Upload Profile Picture
                    </label>
                    <div className="flex items-center">
                        <label className="cursor-pointer w-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 flex items-center justify-center">
                            <FontAwesomeIcon icon={faUpload} className="mr-2" />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            {image ? (
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Profile"
                                    className="w-16 h-16 object-cover rounded-full border border-gray-300"
                                />
                            ) : (
                                <span className="text-gray-500">Choose an image</span>
                            )}
                        </label>
                    </div>
                </div>
                <div className="mb-6">
                    <button
                        onClick={handleSignup}
                        className={`w-full py-3 px-6 rounded-md font-semibold ${darkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <button
                        className="py-2 px-4 rounded-md bg-red-500 text-white hover:bg-red-600 flex items-center mb-4 md:mb-0"
                    >
                        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                        Sign up with Google
                    </button>
                    <button
                        className="py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 flex items-center"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Sign up with Facebook
                    </button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Signup;
