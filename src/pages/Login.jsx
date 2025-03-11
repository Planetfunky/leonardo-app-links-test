import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  const openApp = () => {
    // Get token from the current URL if it exists
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    // Only add token parameter if it exists
    const queryPart = token ? `?token=${encodeURIComponent(token)}` : '';
    
    // Custom URL scheme
    const fallbackUrl = `leonardo://${queryPart}`;
    
    // Try to open the app with the custom URL scheme
    window.location.href = fallbackUrl;
  };

  return (
    <div className="container">
      <h1>Open Leonardo App</h1>
      <div className="card">
        <p>Click the button below to open the Leonardo app:</p>
        <button onClick={openApp} className="button">
          Open Leonardo App
        </button>
      </div>
    </div>
  );
}

export default Login
