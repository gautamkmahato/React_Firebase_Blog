import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import './style.css'; 
import { signOut } from "firebase/auth";
import { auth } from "./firebase_config";


function App(){
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    
  
    const handleSignOut = async () => {
      try{
        await signOut(auth)
        localStorage.clear();
        setIsAuth(false);
        <Navigate to="/redirect" /> 
      } catch{
        console.log("Error")
      }
    }

    return(
      <>
        <Router> 
          <nav>
            <Link to="/">Home</Link>
            {!isAuth ? <Link to="/login">Login</Link> : 
              <>
                <button onClick={handleSignOut}>Logout</button>
                <Link to="/createpost">Create Post</Link>
              </>
            }
          </nav>
          <Routes>
            <Route path="/" element={<Home isAuth={isAuth} />}></Route>
            <Route path="/createpost" element={<CreatePost />}></Route>
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
            <Route path="/redirect" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
        
      </>
    )
  
}


export default App;