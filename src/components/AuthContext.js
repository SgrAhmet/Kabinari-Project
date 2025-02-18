import React, { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ❗ useNavigate burada tanımlandı

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Password"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPassword(data[0]?.password || ""); // Veri varsa password al, yoksa boş string ata
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []); // ❗ useEffect içinde veriyi çekiyoruz

  const login = (passwordField,notifyError) => {
    if (passwordField === password) {
      setIsAuthenticated(true);
      navigate("/Yeni-Proje");
    } else {
      // console.warn("Şifre Hatalı");
      notifyError()
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
