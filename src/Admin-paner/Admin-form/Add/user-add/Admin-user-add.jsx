import React, { useState } from 'react'
import './Admin-user-add.css'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export function UserAddpage(){
      const [myusername, setmysername] =  useState("");
      const [myemail ,  setmyemail] = useState("");
      const [mynumber ,  setmynumber] = useState();
      const [mypassword ,  setmypassword] = useState("");
      const [myimage ,  setmyimage] = useState("");

      const nextpage = useNavigate()
      
      async function Singupapi() {
                const apiurl = await fetch("https://exampapae-api.vercel.app/users",{
                    method:"POST",
                    body : JSON.stringify({"username" : myusername, "email" : myemail, "number" : mynumber , "password" : mypassword , "useimage" : myimage}),
                    headers: {
                        "Content-Type": "application/json",
                      }
                   }).then(()=>{
                    toast.success("submit successfully your account")    
                }).catch(()=>{
                   toast.error("network error")
                })
      
    }
     
    return(
        <>
        <Toaster/>
            <div id="Singup-main">
        <form className="form" id="Singup-form" onSubmit={Singupapi}>
            <h3>User Add</h3>
            <input type="text" placeholder="enter usernaame" id="Username" onChange={(e)=>{setmysername(e.target.value)}} required />
            <br/>
            <input type="email" placeholder="enter email" id="email" onChange={(e)=>{setmyemail(e.target.value)}} required/>
            <br/>
            <input type="number" placeholder="enter 10 digit number" id="number" onChange={(e)=>{setmynumber(e.target.value)}} required  min={10}/>
            <br/>
            <input type="password" placeholder="enter a strong password ex:@Ajk56 8 digit" id="password" onChange={(e)=>{setmypassword(e.target.value)}} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"/>
            <br/>
            <input type="url" placeholder="enter image" id="image" onChange={(e)=>{setmyimage(e.target.value)}} required/>
            <br/>
            <button type='submit' >Singup</button>
            <button onClick={()=>{setTimeout(()=>{nextpage('/admin-user')},2000)}}  >BACK</button>
        </form>
    </div>
        </>
    )
}