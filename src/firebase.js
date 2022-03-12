import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseConfig = {
  apiKey: "AIzaSyBYVl3o8kkmq4s6AJchOl1cSPP_0t9FExk",
  authDomain: "react-auth-routes.firebaseapp.com",
  projectId: "react-auth-routes",
  storageBucket: "react-auth-routes.appspot.com",
  messagingSenderId: "766768101696",
  appId: "1:766768101696:web:8eb80901d67cf6d65fa2a5"
};

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}