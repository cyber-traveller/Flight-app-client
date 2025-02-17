import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Ensure Navbar is imported

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/window.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Transparent Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative flex-grow flex flex-col items-center justify-center text-center p-6 z-10">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            YOUR JOURNEY BEGINS HERE
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90">
            Ready to take off?
          </p>

          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <Link to="/flights" aria-label="Get started with booking flights">
              <Button
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                size="lg"
              >
                BOOK NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
