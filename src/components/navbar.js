import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/navbar.css'


const Navbar=()=>{
    const navigate=useNavigate()
    return(
        <div className="Navbar">
        <button className="nav-button"
        onClick={()=>navigate('/Home')}>Home</button>
        <button className="nav-button"
        onClick={()=>navigate('/Share')}>share car</button>
        <button className="nav-button"
        onClick={()=>navigate('/Book')}>book car</button>
        <button className="nav-button"
        onClick={()=>navigate('/notifications')}>notifications</button>
        <button className="nav-button"
        onClick={()=>{
            localStorage.removeItem("name");
            navigate('/');
            }}>logout</button>
        </div>
    )
}

export default Navbar;