import React, { useState } from 'react';

function Login() {
  const [appVersion, setAppVersion] = useState(null);

  const openApp = () => {
    const testToken = 'test_token_123';
    const url = `com.webpartners.Leonardo://login?token=${testToken}`;
    window.location.href = url;
  };

  const checkAppVersion = () => {
    // Create a unique callback URL using the current origin
    const callbackUrl = `${window.location.origin}/version-callback`;
    
    // Create a listener for the version callback
    const messageHandler = (event) => {
      if (event.origin === window.location.origin) {
        try {
          const params = new URLSearchParams(event.data);
          const version = params.get('version');
          const build = params.get('build');
          const platform = params.get('platform');
          
          if (version && platform) {
            setAppVersion(`${platform} v${version} (${build})`);
          }
        } catch (e) {
          console.error('Failed to parse version data:', e);
        }
      }
    };

    // Listen for the version callback
    window.addEventListener('message', messageHandler);
    
    // Send version check request to app
    const versionCheckUrl = `com.webpartners.Leonardo://version-check?callback=${encodeURIComponent(callbackUrl)}`;
    window.location.href = versionCheckUrl;

    // Clean up listener after 5 seconds
    setTimeout(() => {
      window.removeEventListener('message', messageHandler);
      if (!appVersion) {
        setAppVersion('App not installed or version check failed');
      }
    }, 5000);
  };

  return (
    <div className="container">
      <h1>Open Leonardo App</h1>
      <div className="card">
        <p>Click the button below to open the Leonardo app:</p>
        <button onClick={openApp} className="button">
          Open Leonardo App
        </button>
        <button onClick={checkAppVersion} className="button" style={{ marginTop: '10px' }}>
          Check App Version
        </button>
        {appVersion && (
          <p style={{ marginTop: '10px' }}>
            App Version: {appVersion}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login
