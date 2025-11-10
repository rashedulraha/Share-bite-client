import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //! Register user
  const Register = async (email, password) => {
    setLoading(true);
    try {
      const userInformation = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userInformation.user;
      await sendEmailVerification(user);
      return user;
    } catch (error) {
      toast.error("Registration failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //!   delete user
  const deleteUserAccount = async () => {
    const userInfo = user;
    const result = await deleteUser(auth, userInfo);

    return result;
  };
  //! Register and Login with Google
  const WithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error) {
      toast.error("signin failed");
      throw error;
    }
  };

  // ! sign in user
  const signinUser = async (email, password) => {
    setLoading(true);
    try {
      const userInformation = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userInformation.user;
      return user;
    } catch (error) {
      toast.error("Login failed please try again");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //! signout user
  const signout = () => {
    return signOut(auth);
  };

  //! Observer and get user data
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  //! shared value using auth Provider
  const useInformation = {
    Register,
    signinUser,
    signout,
    deleteUserAccount,
    WithGoogle,
    user,
    loading,
  };

  return <AuthContext value={useInformation}>{children}</AuthContext>;
};

export default AuthProvider;
