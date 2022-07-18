
import { useContext } from "react"
import { AuthContect } from "../contexts/AuthContext"
const LogIn =( )=>{

    const value=useContext(AuthContect);

    const {HandleLogin,token, HandleLogOut, setEmail, setPass}=value;

    return (
        <>
        <label htmlFor="" >Email Id</label>
        <input type="email"onChange={(e) => { setEmail(e.target.value) }} />
        <label htmlFor="" >Password</label>
        <input type="password"onChange={(e) => { setPass(e.target.value) }} />
        <button onClick={HandleLogin}>Log In</button>
        </>
    )
}

export default LogIn