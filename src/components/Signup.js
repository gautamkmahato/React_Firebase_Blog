import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';
import Navbar from './Navbar';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {signup, user, isAuthenticated} = useUserAuth();
  const navigate = useNavigate();

  const handleSignup = async(e) => {
    e.preventDefault();
    setLoading(true);
    try{
      await signup(email, password);
      navigate("/");
    } catch{
      console.log("Error")
    }
    setLoading(false);
  }

  return (
    <>
      {(isAuthenticated) ? <Navbar /> : <span style={{textAlign:"center"}}><h1>React Firebase protected routes authentication</h1></span>} 
      <div className='container'>
        <div className='signup-card'>
          <h3>Signup</h3>
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter your email' />
          <br />
          <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter your password' />
          <br />
          <button disabled={loading || user!= null} onClick={handleSignup}>Register Now</button>
          <br />
          <span>Already have an account? <Link to="/">Login now</Link> </span>
        </div>
      </div>
    </>
  )
}

export default Signup