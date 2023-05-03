import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../utils/firebase/firebase.config";
export const AutContext = createContext(null);

const auth = getAuth(app);
const gProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const gSingIn = () => {
    signInWithPopup(auth, gProvider);
  };

  const gitHubSingIn = () => {
    signInWithPopup(auth, gitProvider);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const updateUser = (name, photoUrl)=>{
    console.log(name, photoUrl)
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoUrl
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const authInfo = {
    user,
    createUser,
    singIn,
    logOut,
    loader,
    gSingIn,
    gitHubSingIn,
    updateUser,
  };
  return (
    <div>
      <AutContext.Provider value={authInfo}>{children}</AutContext.Provider>
    </div>
  );
};

export default AuthProvider;
