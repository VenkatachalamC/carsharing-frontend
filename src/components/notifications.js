import { useEffect,useState } from "react";
import Navbar from "./navbar";
import '../styles/notification.css'

const Notifications=()=>{
    const [notifications,setnotifications]=useState([])
    useEffect(()=>{
        const name=localStorage.getItem("name")
        fetch(`http://localhost:5000/notifications/${name}`).then(res=>res.json()).then(data=>{
            setnotifications(data.reverse())
        })
    },[])
    function displaynotification(item){
        return(
            <div className="Notification">
                <h3 className="notification-content">{item.message}</h3>
                <p className="notification-content">{item.time}</p>
            </div>
        )
    }
    return(
        <div className="container">
            <Navbar/>
            <div className="divider"></div>
            {notifications.map(displaynotification)}
        </div>
    )
}

export default Notifications;