import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
import Navbar from './Navbar';

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // New state for handling errors

  const fetchFlights = async () => {
    try {
      const response = await axios.get('https://flight-app-server.onrender.com/flights');
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
      setError('Failed to load flights, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Available Flights</h1>

        {/* Error Message */}
        {error && <div className="text-center text-red-600">{error}</div>}

        {/* Loading Spinner */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <CircularProgress />
          </Box>
        ) : flights.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {flights.map((flight) => (
              <div key={flight._id} className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-xl font-semibold text-gray-800">{flight.airlines}</h2>
                <p className="text-gray-600">Model: {flight.name}</p>
                <p className="text-gray-600">Date: {flight.date}</p>
                <p className="text-gray-600">From: {flight.from} → To: {flight.to}</p>
                <p className="text-gray-800 font-bold">Price: ₹{flight.fare}</p>
                <Link to={`/flights/${flight._id}`} aria-label={`Book flight ${flight.name}`}>
                  <Button className="mt-3 w-full">Book Now</Button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No flights available at the moment.</div>
        )}
      </div>
    </div>
  );
};

export default Flights;
