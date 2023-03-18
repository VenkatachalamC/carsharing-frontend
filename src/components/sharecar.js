import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import '../styles/sharecar.css'
const ShareCar=()=>{
    const username=localStorage.getItem("name")
    const [carname,setcarname]=useState("")
    const [Type,setType]=useState("SUV")
    const [charge,setCharge]=useState(0)
    const [phno,setphno]=useState("")
    const navigate=useNavigate()

    useEffect(()=>{
        switch(Type){
            case "SUV":setCharge(1500);break;
            case "Sedan":setCharge(1000);break;
            case "mini":setCharge(500);break;
            default:setCharge(500);
        }
    },[Type])
    function share(){
        fetch("https://carsharing-p2uk.onrender.com/share",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                carModel:carname,
                userName:username,
                cartype:Type,
                charge:charge,
                contactNumber:phno
            })
        }).then(res=>res.json()).then(data=>{
            navigate("/Home")
        })
    }
    return (
        <div className="page-container">
        <Navbar/>
        <div className="sharecar-form">
         <h4 className="label">Enter your Car Model</h4>
         <input placeholder="Car Name" className="form-input"
         value={carname} onChange={
            (e)=>setcarname(e.target.value)
         }/>
         <h4 className="label">Enter your car Type</h4>
         <select name="cars" className="choice" 
         onChange={(e)=>setType(e.target.value)}>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="mini">mini</option>
        </select>
        <h4 className="label">Enter your contact number</h4>
        <input className="form-input" placeholder="eg 9063541237"
        value={phno} onChange={(e)=>setphno(e.target.value)}
        />
        <h4 className="label">Rs.{charge}/day</h4>
        {/* <input type="number" className="form-input"
        value={charge} onChange={
            (e)=>setCharge(e.target.value)
        }/> */}
        <button className="share-btn"
        onClick={share}>share</button>
        </div>
        </div>
    )
}

export default ShareCar;