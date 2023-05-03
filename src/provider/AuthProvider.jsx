import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../utils/firebase/firebase.config';
export const AutContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoader(true)
        return signOut(auth);
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser);
            setLoader(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        createUser,
        singIn,
        logOut,
        loader,
    }
    return (
        <div>
            <AutContext.Provider value={authInfo}>
                {children}
            </AutContext.Provider>
        </div>
    );
};

export default AuthProvider;