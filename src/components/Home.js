import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import Navbar from './Navbar';
import '../style.css';


function Home() {
  const {user, logout} = useUserAuth();

  const handleLogout = async () => {
    try{
      await logout();
      <Navigate to="/" /> 
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='card'>
          <h1>Home Page</h1>
          <h3>Welcome: {user && user.email}</h3>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>
    </>
  )
}

export default Home