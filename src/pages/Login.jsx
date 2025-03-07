import { Link } from 'react-router-dom'

function Login() {
  const openApp = () => {
    // Try both URL schemes
    window.location.href = 'com.webpartners.Leonardo://login';
    
    // Fallback after a short delay
    setTimeout(() => {
      window.location.href = 'https://planetfunk-deelinking.netlify.app/login';
    }, 1000);
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <div className="card">
        <h2>Universal Link Success!</h2>
        <p>If you're seeing this page in a web browser, the Universal Link was not intercepted by the Leonardo app.</p>
        <p>This could mean:</p>
        <ul>
          <li>The app is not installed</li>
          <li>Universal Links are not properly configured</li>
          <li>You're testing on a non-iOS device</li>
        </ul>
        <button onClick={openApp} className="button" style={{ marginBottom: '10px' }}>
          Open in Leonardo App
        </button>
        <br />
        <Link to="/" className="button">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Login
