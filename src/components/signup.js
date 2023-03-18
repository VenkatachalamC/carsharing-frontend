import React, { useState } from "react";
import '../styles/signup.css'
import { useNavigate } from "react-router-dom";
const SignUp=()=>{
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [confirmpass,setconfirmpass]=useState("")
    const [err,seterr]=useState("")
    const navigate=useNavigate()

    function SignUpHandle(){
        if(password===confirmpass){
            fetch("http://localhost:5000/signUp",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username:username,
                    password:password
                })
            }).then(res=>res.json()).then(data=>{
                if(data.status==="ok"){
                    navigate('/')
                }
                else{
                    seterr(data.status)
                }
            })
        }
    }
    return(
        <div className="signup-container">
        <div className="card-signup">
            {err && <h4 className="errmsg">{err}</h4>}
        <input placeholder="User Name" value={username} 
        className="input-signup"
        onChange={
            (e)=>{
                setusername(e.target.value)
            }
        }/>
        <input placeholder="Password" value={password} 
        className="input-signup"
        type="password"
        onChange={
            (e)=>{
                setpassword(e.target.value)
            }
        }/>
        <input placeholder="Confirm Password" value={confirmpass} 
        className="input-signup"
        type="password"
        onChange={
            (e)=>{
                setconfirmpass(e.target.value)
            }
        }/>
        <button className="button-signup" onClick={SignUpHandle}>Sign Up</button>
        </div>
        </div>
    )
}

export default SignUp;