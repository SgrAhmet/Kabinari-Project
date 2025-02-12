import React, { createContext,useEffect, useState } from 'react';

import {
    collection,
    getDocs,
    addDoc,
    doc,
  } from "firebase/firestore";
import { db } from '../firebaseConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);  //! False Olarak Değiştir
    const [password, setPassword] = useState("")
  const login = (passwordField) => {


    const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "Password"));
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        //   console.log(data[0].password);
          setPassword(data[0].password)
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
        fetchData()
    //   console.log("sadsadsa"+ passwordField)

      if(passwordField == password){
        setIsAuthenticated(true);
      }else{
        console.warn("Şifre Hatalı")
      }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};