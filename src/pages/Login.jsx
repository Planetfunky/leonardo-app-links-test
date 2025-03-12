import React, { useState } from 'react';

function Login() {
  const [appStatus, setAppStatus] = useState(null);

  const openApp = () => {
    const testToken = 'test_token_123';
    const url = `com.webpartners.Leonardo://login?token=${testToken}`;
    window.location.href = url;
  };

  const checkAppInstalled = () => {
    const now = Date.now();
    
    // Try to open app store URLs
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
      // iOS: Use App Store URL
      window.location.href = 'https://apps.apple.com/us/app/leonardo247/id1529731461';
      setAppStatus('Checking App Store...');
    } else if (/Android/.test(navigator.userAgent)) {
      // Android: Use Play Store URL
      window.location.href = 'market://details?id=com.webpartners.Leonardo';
      setAppStatus('Checking Play Store...');
    } else {
      setAppStatus('Unknown platform - please check on your mobile device');
    }
  };

  return (
    <div className="container">
      <h1>Open Leonardo App</h1>
      <div className="card">
        <p>Click the button below to open the Leonardo app:</p>
        <button onClick={openApp} className="button">
          Open Leonardo App
        </button>
        <button onClick={checkAppInstalled} className="button" style={{ marginTop: '10px' }}>
          Check App Version
        </button>
        {appStatus && (
          <p style={{ marginTop: '10px' }}>
            {appStatus}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login
