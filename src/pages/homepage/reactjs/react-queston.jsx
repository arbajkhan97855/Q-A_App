import React, { useContext, useEffect, useState } from "react";
import "./react-question.css"
import Header from "../../Headerpage/header";
import toast, { Toaster } from "react-hot-toast";
import { contextname } from "../../../contaxtapi/apidata";
import Footer from "../../Footerpage/footer";

export function Reactquestion() {

  
    const {question} = useContext(contextname)
    const [filterdata, setfilterdata] = useState([])
    const [result, setresult] = useState("")
    const [ind, setind] = useState(0)
    const [indd, setindd] = useState(1)
    const [score, setscore] = useState(0)
    const [completed, setCompleted] = useState(false);

    let category = "React"

   
    useEffect(() => {
        const filtervalue = question.filter((fle) => fle.category === category);
        setfilterdata(filtervalue);
    }, [question]);

    const userid = localStorage.getItem("user")

   const Updatestate = () => {
        setindd(indd + 1)
        setind(ind + 1)
        const Resultdata = filterdata.find((item) => item.result == result);
        if (Resultdata) {
            setscore(score + 1)
        } else {
            setscore(score)
        }
        if (ind + 1 >= filterdata.length) {
            setCompleted(true); // ✅ 

            async function Answerdata() {
              
                const apiurl = await fetch(`https://exampapae-api.vercel.app/scorecard/${userid}`,{
                    method:"PATCH",
                    body:JSON.stringify({"reactscore":score + 1}),
                    headers: {
                        "Content-Type": "application/json",
                    }
                }).then(()=>{
                    toast.success("succssfully sumbit score")

                }).catch(()=>{
                    toast.error("not succssfully sumbit score")
                })
              
            }
           Answerdata()
        } else {
            setind(ind + 1)
            
        }
    }


    return (
        <>
          <Toaster/>
         <Header/>

            {completed ? (
                <div className="quiz-container">
                    <h2>✅ Quiz Completed!</h2>
                    <h3>Your Final Score: {score}</h3>
                </div>
            ) :
               filterdata.slice(ind, indd).map((item, index) => {
                    return (
                        <div className="quiz-container">
                            <h3 className="question">Q-{indd} {item.qst}</h3>

                            <div className="options">
                                <label className="option">
                                    <input
                                        type="radio"
                                        onChange={(e) => setresult(e.target.value)}
                                        value={item.options1}
                                        checked={result === item.options1}
                                        name="answer"
                                    />
                                    A) {item.options1}
                                </label>

                                <label className="option">
                                    <input
                                        type="radio"
                                        onChange={(e) => setresult(e.target.value)}
                                        value={item.options2}
                                        checked={result === item.options2}
                                        name="answer"
                                    />
                                    B) {item.options2}
                                </label>

                                <label className="option">
                                    <input
                                        type="radio"
                                        onChange={(e) => setresult(e.target.value)}
                                        value={item.options3}
                                        checked={result === item.options3}
                                        name="answer"
                                    />
                                    C) {item.options3}
                                </label>

                                <label className="option">
                                    <input
                                        type="radio"
                                        onChange={(e) => setresult(e.target.value)}
                                        value={item.options4}
                                        checked={result === item.options4}
                                        name="answer"
                                    />
                                    D) {item.options4}
                                </label>
                            </div>

                            <button className="submit-button" onClick={Updatestate}>Submit</button>
                            <h3>score: {score}</h3>
                        </div>

                    )
                })

            }
            <Footer/>

        </>
    )
}