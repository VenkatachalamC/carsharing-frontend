import React from "react";
import { useState,useEffect } from "react";
import Navbar from "./navbar";
import minicar from '../assets/minicar.png';
import normalcar from '../assets/normalcar.png';
import suvcar from '../assets/suvcar.png';
import '../styles/home.css';
const Home=()=>{
    const [bookings,setbookings]=useState([])
    const [result,setresult]=useState([])
    const name=localStorage.getItem("name")
    useEffect(()=>{
        console.log(name)
        fetch(`http://localhost:5000/bookings/${name}`).then(res=>res.json())
        .then(data=>{
            setbookings(data.reverse())
            console.log(data)
        })
    },[result,name])
    function cancelBooking(bookingData){
     fetch("http://localhost:5000/cancel",{
        method:"delete",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(bookingData)
     }).then(res=>res.json()).then(data=>{
        setresult(data)
    })
    }
    const showBookings=(item)=>{
        let img;
        switch(item.cartype){
            case "SUV":img=<img src={suvcar} className="icon" alt=""/>;break;
            case "Sedan":img=<img src={normalcar} className="icon" alt=""/>;break;
            case "mini":img=<img src={minicar} className="icon" alt=""/>;break;
            default:img=<image src={normalcar} className="icon" alt=""/>;break;
        }
        let data={
            username:name,
            ownername:item.carowner,
            cartype:item.cartype,
            charge:item.charge,
            bookingdate:item.bookingDate,
            carmodel:item.carModel
        }
        return(
            <div className="item-container">
            {img}
            <button className="cancel-btn" onClick={()=>cancelBooking(data)}>cancel</button>
            <h5>Owner : {item.carowner}</h5>
            <h5>CarModel : {item.carModel}</h5>
            <h5>CarType : {item.cartype}</h5>
            <h5>Charge : {item.charge} Rs/day</h5>
            <h7>Booked on : {item.bookingDate}</h7>
            </div>
        )
    }
    return(
    <div className="container">
    <Navbar/>
    <div className="home-divider"></div>
    <h3 className="title">Your bookings</h3>
    {bookings.map(showBookings)}
    </div>
    )
}

export default Home;