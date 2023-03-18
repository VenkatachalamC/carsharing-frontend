import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import '../styles/booking.css';
import minicar from '../assets/minicar.png';
import normalcar from '../assets/normalcar.png';
import suvcar from '../assets/suvcar.png';
const BookCar=()=>{
    const [cars,setcars]=useState([])
    const navigate=useNavigate()
    const name=localStorage.getItem("name")
    useEffect(()=>{
        fetch(`https://carsharing-p2uk.onrender.com/cars/${name}`).then(res=>res.json()).then(data=>{
            setcars(data.reverse())
        })
    },[name])
    //need to change acc to api.
    const Book=(carData)=>{
        fetch("https://carsharing-p2uk.onrender.com/book",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(carData)
        }).then(res=>res.json()).then(data=>{
            if(data.status==="ok"){
                navigate('/Home')
            }
        })
    }
    const showcars=(item)=>{

        let img;
        switch(item.cartype){
            case "SUV":img=<img src={suvcar} className="icon" alt=""/>;break;
            case "Sedan":img=<img src={normalcar} className="icon" alt=""/>;break;
            case "mini":img=<img src={minicar} className="icon" alt=""/>;break;
            default:img=<image src={normalcar} className="icon" alt=""/>;break;
        }
        let data={
            name:name,
            ownername:item.userName,
            cartype:item.cartype,
            rate:item.charge,
            contactNumber:item.contactNumber,
            carmodel:item.carModel
        }
        return (
        <div className="item-container"  key={item._id}>
            {img}
        <button className="book-btn"
        onClick={()=>Book(data)}>Book</button>
        <h4>Ownername : {item.userName}</h4>
        <h4>Car Model: {item.carModel}</h4>
        <h4>Car Type : {item.cartype}</h4>
        <h4>Charge : {item.charge} Rs/day</h4>
        <h4>Contact : {item.contactNumber}</h4>
        </div>)
    }
    return (
        <div className=".container">
            <Navbar/>
        <div className="booking-container">
        <h3 className="title">Available cars</h3>
        {cars.map(showcars)}
        </div>
        </div>
    )
}
export default BookCar;