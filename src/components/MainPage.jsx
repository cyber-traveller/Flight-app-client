import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const MainPage = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-gray-900"
      style={{
        backgroundImage: "url('components/f1.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 space-y-6 text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to PlaneScape</h1>
        <p className="text-lg text-gray-300">Choose your role to proceed</p>

        {/* Buttons */}
        <div className="space-x-4">
          <Link to="/login" aria-label="Login as User">
            <Button variant="default" size="lg" className="px-8 py-3">
              User
            </Button>
          </Link>

          <Link to="/admin/login" aria-label="Login as Admin">
            <Button variant="secondary" size="lg" className="px-8 py-3">
              Admin
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;