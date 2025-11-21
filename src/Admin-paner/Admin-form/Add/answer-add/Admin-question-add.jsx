import React, { useState } from 'react'
import './Admin-question-add.css'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export function QuestionAddpage(){
      const [category, setcategory] =  useState("");
      const [qst ,  setqst] = useState("");
      const [op1 ,  setop1] = useState();
      const [op2 ,  setop2] = useState("");
      const [op3 ,  setop3] = useState("");
      const [op4 ,  setop4] = useState("");
      const [result ,  setresult] = useState("");

      const nextpage = useNavigate()
      
      async function Questionapi(e) {
                 e.preventDefault()
                const apiurl = await fetch("https://exampapae-api.vercel.app/question",{
                    method:"POST",
                    body : JSON.stringify({"category" : category, "qst" :qst, "options1" :op1 , "options2" :op2, "options3" :op3, "options4" :op4 , "result" : result}),
                    headers: {
                        "Content-Type": "application/json",
                      }
                   }).then(()=>{
                    toast.success("add successfully your data")    
                }).catch(()=>{
                   toast.error("network error")
                })
      
    }
     
    return(
        <>
        <Toaster/>
            <div id="add-q-main">
        <form className="form" id="add-q-top" onSubmit={Questionapi}>
            <h3>Question Add</h3>
            <input type="text" placeholder="enter category" id="Username" onChange={(e)=>{setcategory(e.target.value)}} required />
            <br/>
            <textarea  placeholder='enter your question' type="text" onChange={(e)=>{setqst(e.target.value)}} required />
            <br/>
            <input type="text" placeholder="enter first option" id="email" onChange={(e)=>{setop1(e.target.value)}} required/>
            <br/>
            <input type="text" placeholder="enter second option" id="number" onChange={(e)=>{setop2(e.target.value)}} required  min={10}/>
            <br/>
            <input type="text" placeholder="enter tirth option" id="password" onChange={(e)=>{setop3(e.target.value)}} required />
            <br/>
            <input type="text" placeholder="enter fourth option" id="image" onChange={(e)=>{setop4(e.target.value)}} required/>
            <br/>
            <input type="text" placeholder="enter answers" onChange={(e)=>{setresult(e.target.value)}} required/>
            <br/>
            <button type='submit' >Post</button>
            <button onClick={()=>{setTimeout(()=>{nextpage('/admin-home')},2000)}}>BACK</button>
        </form>
    </div>
        </>
    )
}