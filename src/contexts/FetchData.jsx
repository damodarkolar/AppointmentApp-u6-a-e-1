import { createContext,useState,useEffect } from "react";


const FetchData =createContext();

const FetchDataProvider =({childern}) => {
const [data, setData]=useState([])

const FetchData=() => {
  fetch(`http://localhost:8001/appointments`)
  .then(res=> res.json())
  .then(data=> console.log(data))
  .then(err=> console.log(err))

}


const HandleDeleteData =(id) => {

}



    return(<FetchData.Provider value={{data, HandleDeleteData,FetchData}}>{childern}</FetchData.Provider>)
}