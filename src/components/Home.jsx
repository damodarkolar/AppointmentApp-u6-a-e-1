import LogIn from "./Login"
import { AuthContect } from "../contexts/AuthContext"
import { useContext,useEffect,useState } from "react"


const Home =( )=>{
const {HandleLogin,token, HandleLogOut, setEmail, setPass}=useContext(AuthContect);

const [data, setData]=useState([])

useEffect(() => {
  fetch(`http://localhost:8001/appointments`)
  .then(res=> res.json())
  .then(data=> console.log(data))
  .then(err=> console.log(err))
  
}, [])

   return token ? (
    <div>
        {token}
    </div>
   ):(
    <h2>{"please Log in"}</h2>
   )

}

export default Home