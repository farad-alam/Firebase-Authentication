import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

// Google provider
const googleProvider = new GoogleAuthProvider()


function FirebaseAuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const createUser = (email, password) => {
    setAuthLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    setAuthLoading(true);
    return signOut(auth);
  };

  const signWithGoogle = ()=>{
    setAuthLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setAuthLoading(false)
        console.log(user);
      } else {
        setAuthUser(null)
        setAuthLoading(false)
      };
    });

    return ()=>{
      unsubscribe()
    }
  }, []);

  const userAuthDetails = {
    auth,
    authLoading,
    authUser,
    createUser,
    loginUser,
    logOutUser,
    signWithGoogle
  };
  return <AuthContext value={userAuthDetails}>{children}</AuthContext>;
}

export default FirebaseAuthProvider;
