import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase_config';

export const userAuthContext = createContext();

function UserAuthContextProvider(props) {
    const [user, setUser] = useState("");
    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logout(){
        signOut(auth);
    }
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, ((currentUser) => {
            setUser(currentUser);
        }));
        return () => {
            unsub();
        };
    },[]);
    const value = {signup, login, logout, user};
    return (
        <>
            <userAuthContext.Provider value={value}>
                {props.children}
            </userAuthContext.Provider>
        </>
    )
}

export function useUserAuth(){
    const userAuth = useContext(userAuthContext)
    return { ...userAuth, isAuthenticated: userAuth.user != null }
}

export default UserAuthContextProvider;