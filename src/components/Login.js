
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';
import Navbar from "../components/Navbar";
import '../style.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(false);

    const {login, isAuthenticated} = useUserAuth();
    const navigate = useNavigate();

    console.log(isAuthenticated)

    const handleLogin = async (e) => {
        e.preventDefault();
        setDisabled(true)
        try{
            await login(email, password);
            navigate("/home");
        } catch(err){
            setError(err.message);
        }
        setDisabled(false)
    }

    return (
        <>
            {(isAuthenticated) ? <Navbar /> : <span style={{textAlign:"center"}}><h1>React Firebase protected routes authentication</h1></span>} 
            <div className='container'>
                <div className='login-card'>
                    <h3>Login</h3>
                    <p>{error}</p>
                    <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter your email' />
                    <br />
                    <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter your Password' />
                    <br />
                    <button disabled={disabled} onClick={handleLogin}>Login</button>
                    <br />
                    <span>Not a member? <Link to="/signup">Signup now</Link></span>
                </div>
            </div>
        </>
    )
}

export default Login