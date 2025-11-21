import React, { useState } from "react";
import "./a-login.css"
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function AdminLogin() {
    const AdminEmail = "pathanarbaj03328@gmail.com"
    const AdminPassword = "arbaj97855"

    const [EmailValue,setEmailValue] = useState("")
    const [PasswordValue,setPasswordValue] = useState("")
    const Lowelvalue = EmailValue.toLowerCase();
    const Lowelvaluee = PasswordValue.toLowerCase();
     const usenevigate = useNavigate()
    const LoginAdmin = ()=>{
        if(Lowelvalue == AdminEmail && Lowelvaluee == AdminPassword){
           toast.success(`Succefull Login, Welcome Arbaj Pathan`)
        }else{
            toast.error("Not correct password, please try again")
        }
    }

    return(
        
        <>
        <Toaster/>
        <div id="a-login-main">
            <div id="a-login-top">
                <form onSubmit={LoginAdmin} action={'/admin-home'}>
                    <h2>Admin Form</h2>
                    <input placeholder="Enter your email " type="email" required  onChange={(e)=>setEmailValue(e.target.value)}/><br/>
                    <input placeholder="Enter your password " type="password" required onChange={(e)=>setPasswordValue(e.target.value)}/><br/>
                    <button type="submit">Login Up</button>
                </form>
            </div>
        </div>
        </>
    )
}