import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  const openApp = () => {
    // Get token from the current URL if it exists
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    // Only add token parameter if it exists
    const queryPart = token ? `?token=${encodeURIComponent(token)}` : '';
    
    // Primary: Try Android App Links URL
    const appLinksUrl = `https://planetfunk-deelinking.netlify.app/login${queryPart}`;
    
    // Fallback: Custom URL scheme as backup
    const fallbackUrl = `leonardo://${queryPart}`;
    
    // Try to open the app with App Links
    window.location.href = appLinksUrl;
    
    // Set a timeout to try the fallback URL if App Links fails
    setTimeout(() => {
      // Check if we're still on the same page (App Links didn't work)
      if (document.hidden || document.webkitHidden) {
        return; // App was opened, don't do anything
      }
      
      // Try fallback URL
      window.location.href = fallbackUrl;
      
      // If both fail, we'll stay on this page
    }, 1000);
  };

  // Auto-trigger the app opening on component mount
  React.useEffect(() => {
    openApp();
  }, []);

  return (
    <div className="container">
      <h1>Redirecting to Leonardo app...</h1>
      <div className="card">
        <p>If the app doesn't open automatically, click below:</p>
        <button onClick={openApp} className="button">
          Open Leonardo App
        </button>
      </div>
    </div>
  );
}

export default Login
