
import FetchData from "../contexts/FetchData";
import {useContext} from "react"


const HomePageAppointmentCard=({id,Name}) =>{

    const{HandleDeleteData,FetchData,data}=useContext(FetchData);

    useEffect(() => {
        FetchData()
    }, [])
    


    return (
        <>
        <div>
            <h1>
                {Name}
            </h1>
            <button onClick={() => {return }}>ViewMore</button>
            <button onClick={()=>{ return  HandleDeleteData(id)}}>Delete</button>
        </div>

        </>
    )
}