import React, { useState } from "react";
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

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    return signOut(auth);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthUser(user);
      console.log(user);
    } else setAuthUser(null);
  });

  const userAuthDetails = {
    auth,
    loading,
    authUser,
    createUser,
    loginUser,
    logOutUser,
  };
  return <AuthContext value={userAuthDetails}>{children}</AuthContext>;
}

export default FirebaseAuthProvider;
