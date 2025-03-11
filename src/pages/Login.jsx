import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
  const [lastAttempt, setLastAttempt] = useState('');

  const openApp = () => {
    // Add a test token
    const testToken = 'test_token_123';
    const queryPart = `?token=${encodeURIComponent(testToken)}`;
    
    // Try custom scheme first since we're testing on emulator
    const customSchemeUrl = `leonardo://login${queryPart}`;
    const appLinksUrl = `https://planetfunk-deelinking.netlify.app/login${queryPart}`;
    
    console.log('Attempting to open app with custom scheme:', customSchemeUrl);
    setLastAttempt('Trying custom scheme: ' + customSchemeUrl);
    
    // Try custom scheme first (more reliable on emulator)
    window.location.href = customSchemeUrl;
    
    // If custom scheme fails, try App Links after a short delay
    setTimeout(() => {
      if (document.hidden || document.webkitHidden) {
        console.log('App opened successfully!');
        setLastAttempt('App opened successfully!');
        return;
      }
      console.log('Custom scheme failed, trying App Links:', appLinksUrl);
      setLastAttempt('Trying App Links URL: ' + appLinksUrl);
      window.location.href = appLinksUrl;
      
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
