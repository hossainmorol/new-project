import React, { createContext, useEffect, useState } from "react";
import app from "../../Firbase/firbase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const Provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  // createUser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signGoolgle
  const singGoolgle = () => {
    return signInWithPopup(auth, Provider);
  };

  // login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //manage users
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { user, createUser, singGoolgle, login };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
