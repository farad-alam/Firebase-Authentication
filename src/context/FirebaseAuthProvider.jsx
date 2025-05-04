import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

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
    // setAuthLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setAuthLoading(false)
        console.log(user);
      } else setAuthUser(null);
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
  };
  return <AuthContext value={userAuthDetails}>{children}</AuthContext>;
}

export default FirebaseAuthProvider;
