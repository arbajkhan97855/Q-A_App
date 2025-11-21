import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const contextname =  createContext()

export const ContProvider = ({ children }) =>{
        const [answers, setanswers] = useState([])
        const [question, setquestion] = useState([])
        const [userapidata, setuserapidata] = useState([])
    // question api question dikhane ke liye
        async function questionapi() {
            const apiurl = await fetch("https://exampapae-api.vercel.app/question")
            const convert = await apiurl.json()
            setquestion(convert)  
        }
    
        //  answer api answer post or patch krne ke liye 
        async function Answerapi() {
            const apiurl = await fetch("https://exampapae-api.vercel.app/scorecard")
            const convert = await apiurl.json()
            setanswers(convert)    
        }
    
        async function Userapi() {
            const apiurl = await fetch("https://exampapae-api.vercel.app/users")
            const convert = await apiurl.json()
            setuserapidata(convert)  
        }
        useEffect(() => {
            questionapi()
            Answerapi()
            Userapi()
        }, [])
        return(
           
            <contextname.Provider value={{answers,question,userapidata}}>
                { children }
            </contextname.Provider>
             
           
        )
}