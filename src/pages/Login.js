import React from 'react';
import { auth, provider } from '../firebase_config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Login({setIsAuth}) {

  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try{
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
      console.log(result);
    } catch{
      alert("Error !!");
    }
  }

  return (
    <>
      <div className='container'>
        <div className='login-page'>
          <p>Sign in with Google to continue</p>
          <button onClick={signInWithGoogle} className='google-login'>Sign in with Google</button>
        </div>
      </div>
    </>
  )
}

export default Login;