import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post('https://flight-app-server.onrender.com/signin', { email, password });
      localStorage.setItem('token', response.data.token);

      setTimeout(() => {
        toast.success(response.data.message || 'Login Successful');
        navigate('/home'); // Redirect to the home page after successful login
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response?.data?.message || 'Login Failed');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 space-y-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Sign In
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white py-3 rounded-lg transition-colors duration-300 ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-violet-600 hover:bg-violet-700'
            }`}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
              Forgot password?
            </Link>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
          Don't have an account yet?{' '}
          <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
            Sign up
          </Link>
        </p>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </section>
  );
};

export default Signin;