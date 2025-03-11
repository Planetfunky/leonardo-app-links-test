import React from 'react';

function Login() {
  const openApp = () => {
    const testToken = 'test_token_123';
    const url = `leonardo://login?token=${testToken}`;
    window.location.href = url;
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
