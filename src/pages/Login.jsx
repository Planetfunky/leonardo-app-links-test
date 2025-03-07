import { Link } from 'react-router-dom'

function Login() {
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
        <Link to="/" className="button">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Login
