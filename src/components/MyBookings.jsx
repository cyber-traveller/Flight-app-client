import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from './ui/button';
import Navbar from './Navbar';

const MyBookings = () => {
  const { id: _id } = useParams();
  const [flights, setFlights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch flight data
  const fetchFlight = async () => {
    try {
      const response = await axios.get(`https://flight-app-server.onrender.com/flights/${_id}`);
      setFlights(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching flight data:', err);
      setError('Failed to load bookings. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlight();
  }, [_id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Loading your bookings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  if (!flights) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">No bookings found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Bookings Section */}
      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            {/* Header */}
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl mb-6">My Bookings</h2>

            {/* Booking Details */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              {/* Airline ID */}
              <div className="flex items-center gap-4">
                <span className="text-gray-500 font-medium">Airline ID:</span>
                <span className="text-gray-900 font-semibold">{flights.name || 'N/A'}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-4">
                <span className="text-gray-500 font-medium">Date:</span>
                <span className="text-gray-900 font-semibold">{flights.date || 'N/A'}</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-gray-500 font-medium">Price:</span>
                <span className="text-gray-900 font-semibold">₹{flights.fare || 'N/A'}</span>
              </div>

              {/* Status */}
              <div className="flex items-center gap-4">
                <span className="text-gray-500 font-medium">Status:</span>
                <span className="inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  <svg
                    className="me-1 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z"
                    />
                  </svg>
                  On Route
                </span>
              </div>

              {/* View Ticket Button */}
              <div className="flex justify-end">
                <Button asChild variant="default">
                  <Link to={`/payment/getTicket/${_id}`} aria-label="View ticket">
                    View Ticket
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyBookings;