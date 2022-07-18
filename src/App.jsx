
import './App.css';
import { AuthContect} from "./contexts/AuthContext"
// import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'; 
import Home from './components/Home';
import LogIn from './components/Login';
import Appointments from './components/Appointments';

function App() {
  return (
    <>
    {/* <NavBar/> */}
    <Appointments></Appointments>
    <Home/>
    <LogIn/>
    {/* <Routes>
      <Route path='./' element={<Home/>}/>
      <Route path='./login' element={<LogIn/>}/>
      <Route path='./appointments' element={<Appointments/>}/>
    </Routes> */}
    </>
  );
}

export default App;
