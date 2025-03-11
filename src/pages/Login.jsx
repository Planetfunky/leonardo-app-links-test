import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  const openApp = () => {
    // Get token from the current URL if it exists
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    // Only add token parameter if it exists
    const queryPart = token ? `?token=${encodeURIComponent(token)}` : '';
    
    // Try both App Links and custom scheme
    const appLinksUrl = `https://planetfunk-deelinking.netlify.app/login${queryPart}`;
    const fallbackUrl = `leonardo://login${queryPart}`;
    
    // Try App Links first
    window.location.href = appLinksUrl;
    
    // If App Links fails, try custom scheme after a short delay
    setTimeout(() => {
      if (document.hidden || document.webkitHidden) {
        return; // App was opened, don't do anything
      }
      window.location.href = fallbackUrl;
    }, 1000);
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
