import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';

export default function TicketPage() {
    const { id: _id } = useParams();
    const [flight, setFlight] = useState({});
  
    const fetchFlight = async () => {
        try {
            const response = await axios.get(`https://flight-app-server.onrender.com/flights/${_id}`);
            setFlight(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFlight();
    }, []);

    const getPassengerData = () => {
        const nameArray = localStorage.getItem('nameData');
        const names = JSON.parse(nameArray);
        return names.map((name, idx) => (
            <p key={idx} className="text-sm font-medium">{name}</p>
        ));
    };

    const getSeatNumbers = () => {
        const noArray = localStorage.getItem('reservedSeats');
        const seats = JSON.parse(noArray);
        return seats.map((seat, idx) => (
            <p key={idx} className="text-sm font-medium">{seat}</p>
        ));
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <div className="text-center text-2xl font-bold mb-4">
                    <Link to={`/MyBookings/${_id}`} className="hover:underline text-blue-600">
                        Your Ticket Sent to Your Bookings
                    </Link>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img
                                src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&fakeurl=1"
                                alt="Airindia"
                                className="h-10 w-10 rounded-full"
                            />
                            <div>
                                <h2 className="text-xl font-medium">{flight.airlines}</h2>
                                <p className="text-gray-600">{flight.name}</p>
                            </div>
                        </div>
                        <div className="text-blue-800 text-lg">{flight.name}</div>
                    </div>

                    <div className="border-b border-gray-300 my-4" />

                    <div className="flex justify-between">
                        <div className="flex flex-col items-center">
                            <div className="text-lg font-semibold text-blue-600">{flight.from}</div>
                        </div>
                        <img
                            src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&fakeurl=1"
                            alt="Airindia"
                            className="w-20 h-20 object-contain"
                        />
                        <div className="flex flex-col items-center">
                            <div className="text-lg font-semibold text-blue-600">{flight.to}</div>
                        </div>
                    </div>

                    <div className="border-b border-gray-300 my-4" />

                    <div className="flex justify-between text-sm">
                        <div className="flex flex-col">
                            <span>Flight</span>
                            <div className="font-semibold">{flight.name}</div>
                        </div>
                        <div className="flex flex-col">
                            <span>Gate</span>
                            <div className="font-semibold">B3</div>
                        </div>
                    </div>

                    <div className="border-b border-gray-300 my-4" />

                    <div className="flex justify-between text-sm">
                        <div className="flex flex-col">
                            <span>Board</span>
                            <div className="font-semibold">11:50 AM</div>
                        </div>
                        <div className="flex flex-col">
                            <span>Departs</span>
                            <div className="font-semibold">11:30 AM</div>
                        </div>
                        <div className="flex flex-col">
                            <span>Arrives</span>
                            <div className="font-semibold">2:00 PM</div>
                        </div>
                    </div>

                    <div className="border-b border-gray-300 my-4" />

                    <div className="flex justify-between text-sm">
                        <div className="flex flex-col">
                            <span>Passenger</span>
                            <div className="font-semibold">{getPassengerData()}</div>
                        </div>
                        <div className="flex flex-col">
                            <span>Class</span>
                            <div className="font-semibold">Economy</div>
                        </div>
                        <div className="flex flex-col">
                            <span>Seats</span>
                            <div className="font-semibold">{getSeatNumbers()}</div>
                        </div>
                    </div>

                    <div className="border-b border-gray-300 my-4" />

                    <div className="text-center">
                        <h6 className="font-bold text-lg">Boarding Pass</h6>
                        <div className="barcode bg-gray-300 h-14 mt-4 mx-auto"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
