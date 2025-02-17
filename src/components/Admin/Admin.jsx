import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import Sidebar from './sidebar';
import Fights from '../Admin/Fights';

const Admin = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle Sign Out
  const handleSignOut = () => {
    // Perform sign-out actions (e.g., clear localStorage, cookies, or session)
    localStorage.removeItem('authToken'); // Example: Remove authentication token
    sessionStorage.clear(); // Example: Clear session storage

    // Redirect to the login page or home page
    navigate('/login'); // Replace '/login' with your desired route
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f4f9' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Header Section */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1 style={{ margin: 0 }}>Dashboard</h1>
          <button
            onClick={handleSignOut} // Attach the sign-out function
            style={{
              padding: '10px 20px',
              backgroundColor: 'violet',
              color: 'text-white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Sign Out
          </button>
        </header>

        {/* Metrics Section */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
          {/* Today's Money */}
          <div style={metricCardStyle}>
            <p style={metricLabelStyle}>Today's Money</p>
            <h3 style={metricValueStyle}>₹95.45cr</h3>
            <p style={metricChangeStyle('green')}>+55% than last week</p>
          </div>

          {/* Today's Users */}
          <div style={metricCardStyle}>
            <p style={metricLabelStyle}>Today's Users</p>
            <h3 style={metricValueStyle}>9,300</h3>
            <p style={metricChangeStyle('green')}>+3% than last month</p>
          </div>

          {/* New Clients */}
          <div style={metricCardStyle}>
            <p style={metricLabelStyle}>New Clients</p>
            <h3 style={metricValueStyle}>1,462</h3>
            <p style={metricChangeStyle('red')}>-2% than yesterday</p>
          </div>

          {/* Sale of Flight Tickets */}
          <div style={metricCardStyle}>
            <p style={metricLabelStyle}>Sale of Flight Tickets</p>
            <h3 style={metricValueStyle}>₹103,430cr</h3>
            <p style={metricChangeStyle('green')}>+5% than yesterday</p>
          </div>
        </section>

        {/* List of All Events */}
        <section>
          <h2 style={{ marginBottom: '20px' }}>List of All Events</h2>
          <Fights />
        </section>
      </div>
    </div>
  );
};

// Styles for Metrics Cards
const metricCardStyle = {
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  borderRadius: '8px',
};

const metricLabelStyle = {
  margin: '0 0 10px',
  fontSize: '14px',
  color: '#888',
};

const metricValueStyle = {
  margin: '0 0 10px',
  fontSize: '20px',
  fontWeight: 'bold',
};

const metricChangeStyle = (color) => ({
  margin: '0',
  fontSize: '12px',
  color: color,
});

export default Admin;