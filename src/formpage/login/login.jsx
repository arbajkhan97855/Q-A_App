import React, { useEffect, useState } from 'react'
import './loginpage.css'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"


export function Loginpage(){
        const [apidataa,setapidataa] = useState([])
        const [mynumber ,  setmynumber] = useState();
        const [mypassword ,  setmypassword] = useState("");
        const nextpage = useNavigate();

        async function Loginapi() {
             const apiurl = await fetch("https://exampapae-api.vercel.app/users")
             const convertapi = await apiurl.json();
            setapidataa(convertapi)
        }

        const Loginsubmit = () =>{
            const finddata = apidataa.find((item)=>item.number == mynumber && item.password == mypassword);
            if(finddata){
                localStorage.setItem("user",finddata._id)
               toast.success("succefull login")
    
                setTimeout(()=>{
                  nextpage('/jsquestion')
                },2000)
            }else{
                toast.error("opps!, please try again")
            };
        }

         useEffect(()=>{
            Loginapi()
         },[]) 



 
    return(
        <>
        <Toaster/>
            <div id='login-page-main'>
            <div id="login-main">
            <div  id="Login-form">
            <h3>Login Now</h3>
            <input type="number" placeholder="enter use number"  onChange={(e)=>{setmynumber(e.target.value)}}/>
            <br/>
            <input type="password" placeholder="enter password" onChange={(e)=>{setmypassword(e.target.value)}}/>
            <br/>
            <button onClick={Loginsubmit}>Login</button>
            <button onClick={()=>nextpage('/singup')}>Singup</button>
            {/* <button onClick={loginWithGoogle}>kjhjkh</button> */}
        </div>
    </div>
    </div>
        </>
    )
}