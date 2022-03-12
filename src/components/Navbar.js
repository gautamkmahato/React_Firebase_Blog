import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='navbar'>
        <h1>React Firebase protected routes authentication</h1>
            <div className='links'>
                <span><Link to="/login">Login</Link></span>
                <span><Link to="/signup">Signup</Link></span>
                <span><Link to="/">Home</Link></span>
            </div>
        </div>
    </>
  )
}

export default Navbar