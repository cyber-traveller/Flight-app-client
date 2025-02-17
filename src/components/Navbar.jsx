import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth } from '@/services/AuthProvider';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white flex-wrap p-4 flex justify-between items-center relative z-20">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/home">
          <img src="/assets/images/icon.png" alt="Logo" className="w-16" />
        </Link>
        {/* Add "PlaneScape" text closer to the logo */}
        <Link to="/home" className="font-bold text-xl text-gray-800">
          PlaneScape
        </Link>
      </div>

      {/* Desktop Links */}
      <div>
        <ul className="hidden md:flex space-x-4">
          <li className="flex space-x-8 font-semibold">
            <Link to="/home">Home</Link>
            <Link to="/MyBookings">My Bookings</Link>
            <Link to="/flights">Book a Flight</Link>
          </li>
        </ul>
      </div>

      {/* Logout Button */}
      <div className="flex items-center space-x-4">
        <Button
          onClick={() => {
            logout();
            navigate('/');
          }}
          className="bg-red-600 text-white rounded-lg hover:bg-red-700 px-4 py-2 font-medium"
        >
          Logout
        </Button>

        {/* Mobile Menu */}
        <nav className="md:hidden items-center">
          <Sheet>
            <SheetTrigger>
              <img src="/assets/icons/menu.svg" alt="Menu" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-center">
                    <Link to="/">
                      <img src="/assets/images/icon.png" alt="Logo" className="w-36" />
                    </Link>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col space-y-4 text-black font-sans font-semibold">
                    <Link to="/home">Home</Link>
                    <Link to="/MyBookings">My Bookings</Link>
                    <Link to="/flights">Book a Flight</Link>
                    <Button
                      onClick={() => {
                        logout();
                        navigate('/');
                      }}
                      className="bg-red-600 text-white rounded-lg px-4 py-2"
                    >
                      Logout
                    </Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
