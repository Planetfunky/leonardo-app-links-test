import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
  const [lastAttempt, setLastAttempt] = useState('');

  const openApp = () => {
    // Get token from the current URL if it exists
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    // Only add token parameter if it exists
    const queryPart = token ? `?token=${encodeURIComponent(token)}` : '';
    
    // Try both App Links and custom scheme
    const appLinksUrl = `https://planetfunk-deelinking.netlify.app/login${queryPart}`;
    const fallbackUrl = `leonardo://login${queryPart}`;
    
    console.log('Attempting to open app with:', appLinksUrl);
    setLastAttempt('Trying App Links URL: ' + appLinksUrl);
    
    // Try App Links first
    window.location.href = appLinksUrl;
    
    // If App Links fails, try custom scheme after a short delay
    setTimeout(() => {
      if (document.hidden || document.webkitHidden) {
        console.log('App opened successfully!');
        setLastAttempt('App opened successfully!');
        return;
      }
      console.log('App Links failed, trying custom scheme:', fallbackUrl);
      setLastAttempt('Trying custom scheme: ' + fallbackUrl);
      window.location.href = fallbackUrl;
      
      // Final check after another delay
      setTimeout(() => {
        if (!document.hidden && !document.webkitHidden) {
          console.log('Both attempts failed');
          setLastAttempt('Failed to open app. Is it installed?');
        }
      }, 1000);
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
        {lastAttempt && (
          <p style={{ marginTop: '20px', color: lastAttempt.includes('failed') ? 'red' : 'green' }}>
            {lastAttempt}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login
