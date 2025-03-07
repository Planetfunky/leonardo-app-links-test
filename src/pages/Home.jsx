import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <h1>Leonardo Deep Linking Test</h1>
      <div className="card">
        <h2>Test Universal Links</h2>
        <p>Click the button below to test iOS Universal Links:</p>
        <Link to="/login" className="button">
          Test Universal Link (/login)
        </Link>
      </div>
      <div className="info">
        <h3>Configuration Info:</h3>
        <ul>
          <li>Domain: planetfunk-deelinking.netlify.app</li>
          <li>Team ID: A84NWMZFJP</li>
          <li>Bundle ID: com.webpartners.Leonardo</li>
          <li>Path: /login</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
