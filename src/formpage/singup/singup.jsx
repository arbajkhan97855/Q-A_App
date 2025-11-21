import React, { useState } from 'react'
import './singup.css'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export function Singuppage(){
      const [myusername, setmysername] =  useState("");
      const [myemail ,  setmyemail] = useState("");
      const [mynumber ,  setmynumber] = useState();
      const [mypassword ,  setmypassword] = useState("");
      const nextpage = useNavigate()
      
      async function Singupapi(e) {
                e.preventDefault();
                 const emailapiurl = await fetch("https://exampapae-api.vercel.app/users")
                 const convertdata = await emailapiurl.json();
                 const finddata =  convertdata.find((data) => data.email == myemail);

                 if(!finddata){
                     const apiurl = await fetch("https://exampapae-api.vercel.app/users",{
                    method:"POST",
                    body : JSON.stringify({"username" : myusername, "email" : myemail, "number" : mynumber , "password" : mypassword}),
                    headers: {
                        "Content-Type": "application/json",
                      }
                   }).then(()=>{
                    toast.success("submit successfully your account")
                    setTimeout(()=>{
                        nextpage("/")
                    },2000)        
                }).catch(()=>{
                   toast.error("network error")
                })
             }else{
                toast.error("email is already create account, try new email")
             }
                
      
    }
     
    return(
        <>
        <Toaster/>
            <div id="Singup-main">
        <form className="form" id="Singup-form" onSubmit={Singupapi} >
            <h3>Singup Now</h3>
            <input type="text" placeholder="enter usernaame" id="Username" onChange={(e)=>{setmysername(e.target.value)}} required />
            <br/>
            <input type="email" placeholder="enter email" id="email" onChange={(e)=>{setmyemail(e.target.value)}}  autoComplete='current-email' required/>
            <br/>
            <input type="number" placeholder="enter 10 digit number" id="number" onChange={(e)=>{setmynumber(e.target.value)}} required  min={10}/>
            <br/>
            <input type="password" placeholder="enter a strong password ex:@Ajk56 8 digit" id="password" autoComplete='current-password' onChange={(e)=>{setmypassword(e.target.value)}} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"/>
            <br/>

            <button type="submit" >Singup</button>
            <button onClick={()=>{setTimeout(()=>{nextpage('/')},4000)}}  >BACK</button>
        </form>
    </div>
        </>
    )
}