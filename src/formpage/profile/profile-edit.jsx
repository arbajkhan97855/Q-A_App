import React, { useEffect, useState } from "react";
import './profile-edit.css'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import Header from "../../pages/Headerpage/header";
import Footer from "../../pages/Footerpage/footer";


export const ProEdit = () =>{
    const [myusername, setmysername] =  useState("");
          const [myemail ,  setmyemail] = useState("");
          const [mynumber ,  setmynumber] = useState();
          const [mypassword ,  setmypassword] = useState("");
          const [Userapii,setuserapii] = useState([])

          const nextpage = useNavigate()
          const userid = localStorage.getItem("user")

          async function Userapi() {
             const apiurl = await fetch(`https://exampapae-api.vercel.app/users/${userid}`)
             const convert = await apiurl.json()
             setuserapii(convert)
          }

        useEffect(()=>{
            Userapi()
        },[])

          async function Editapi() {   
            const apiurl = await fetch(`https://exampapae-api.vercel.app/users/${userid}`,{
             method:"PATCH",
             body : JSON.stringify({"username" : myusername ? myusername : Userapii.username,
                              "email" :  myemail? myemail : Userapii.email,
                              "number" :  mynumber ? mynumber : Userapii.numbe, 
                              "password" : mypassword ? mypassword : Userapii.password
                               }),
             headers: {
                 "Content-Type": "application/json",
               }
            }).then(()=>{
             toast.success("edit successfully your account")
             setTimeout(()=>{
                 nextpage('/jsquestion')
             },4000)
            
         }).catch(()=>{
            toast.error("network error please try again")
         })
       }
    return(
        <>
        <Toaster/>
        <Header />
           <div id="edit-main">
        <div  id="edit-form">
            <h3>Edit Now</h3>
            <input type="text" placeholder="enter usernaame" id="Username" onChange={(e)=>{setmysername(e.target.value)}}/>
            <br/>
            <input type="email" placeholder="enter email" id="email" onChange={(e)=>{setmyemail(e.target.value)}}/>
            <br/>
            <input type="number" placeholder="enter number" id="number" onChange={(e)=>{setmynumber(e.target.value)}}/>
            <br/>
            <input type="password" placeholder="enter password" id="password" onChange={(e)=>{setmypassword(e.target.value)}}/>
            <br/>
            <button onClick={Editapi}>Edit data</button>
        </div>
    </div>
    <Footer />
        </>
    )
}