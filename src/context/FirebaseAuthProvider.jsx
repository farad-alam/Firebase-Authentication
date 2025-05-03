import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

function FirebaseAuthProvider({ children }) {
  const [loading, setLoading] = useState(true)

  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userAuthDetails = {
    auth,
    loading,
    createUser,
  };
  return <AuthContext value={userAuthDetails}>{children}</AuthContext>;
}

export default FirebaseAuthProvider;
