import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'
const SignIn=()=>{
    const [username,setusername]=useState("")
    const [pass,setpass]=useState("")
    const [err,seterr]=useState("")
    const navigate=useNavigate()
    const loginhandler=()=>{
        fetch('http://localhost:5000/signIn',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:username,
                password:pass
            })
        }).then(res=>res.json()).then(data=>{
            if(data.status==="ok"){
                //navigate to list page.
                localStorage.setItem("name",username)
                navigate("/Home")
            }
            else{
                seterr(data.status)
            }
        })
    }
    return(
        <div className='signin-card-container'>
        <div className="card-signin">
            {err && <h4 className='errormsg'>{err}</h4>}
        <input placeholder="Username" value={username} className="input-signin" onChange={(e)=>
        setusername(e.target.value)}/>
        <input placeholder="Password" type="password" value={pass} className="input-signin" onChange={(e)=>{setpass(e.target.value)}}/>
        <button onClick={loginhandler} className="button-signin">Sign In</button>
        <a href="/Signup" className='txt-signin'>Sign Up</a>
        </div>
        </div>
    )
}

export default SignIn;