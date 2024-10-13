import React, { useState } from 'react';
import axios from 'axios';
import { Lock, Mail } from 'lucide-react';
import Modal from './modal.js';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('https://youthful-wandering-veil.glitch.me/auth/login', {
                email: email,
                password: password,
            });

            setModalMessage('Login successful! Welcome back!');
            setShowModal(true);

            // Store token in localStorage with error handling
            try {
                localStorage.setItem('token', response.data.accessToken);
                console.log('Token stored successfully');
            } catch (error) {
                console.error('Failed to save token in localStorage:', error);
                setError('Failed to save token, you may have to adjust your browser settings');
                return;
            }

            // Ensure redirect happens after token is set
            setTimeout(() => {
                window.location.href = '/';
            }, 100);

        } catch (error) {
            setModalMessage('Login failed! Please try again.');
            setShowModal(true);
            setError(error.response ? error.response.data : 'Something went wrong');
        }
    };

    return (
        <div className="relative min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1400/0*Mua5Y2uq4a-XiK6j.jpg')`,
                }}
            />
            <div className="absolute inset-0 bg-white bg-opacity-90 z-10 pointer-events-none" />
            <div className="relative z-20 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <img className="h-40 w-auto" src="/logo.png" alt="Logo" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                        start planning your next adventure
                    </a>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-20">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {showModal && (
                <Modal
                    message={modalMessage}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default LoginPage;
