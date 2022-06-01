import React from 'react';
import axios from "../config/axios";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState();

    const checkLoginStatus = async () => {
        try {
            const { data } = await axios.get("/user/identification");
            console.log(data.success);
            setAuth(data.success)
        } catch (error) {
            console.log("Non connecté");
        }
    }

    const logOut = async () => {
        try {
            await axios.get("/user/logout");
            setAuth()
        }catch(error){
            console.log("Erreur");
        }
    }
 
    useEffect(() => {
        checkLoginStatus();
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;