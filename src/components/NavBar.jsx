import { Link  } from "react-router-dom"




const NavBar =() => {

    return (
        <>
        <Link to={"/"}>Home</Link>
        <Link to={"/appointments"}>Appointments</Link>
        <Link to={"/login"}>Log IN</Link>
        </>
    )
}

export default NavBar