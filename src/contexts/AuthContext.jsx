import { createContext } from "react";
import {useState, useEffect } from "react"

export const AuthContect = createContext();



export const AuthContextProvider =({ children }) => {
const [email, setEmail]=useState("");
const [pass, setPass] =useState("");
const [token, setToken]=useState("");

const HandleLogin =() => {
    console.log(email,pass)
    const cred={
        email: email,
        password: pass
    } 
    fetch(`https://reqres.in/api/login`,{
        method: "POST",
        body:JSON.stringify(cred),
        headers: {"Content-Type": "application/json"}
    }).then(res => res.json()).then (data=>setToken(data.token)).catch(err =>console.log(err));
   
}


const HandleLogOut =( ) => {
setEmail("");
setPass("")
setToken("");
}
return (
    <AuthContect.Provider value={{HandleLogin,token, HandleLogOut, setEmail, setPass}}>{children}</AuthContect.Provider>
)


}













