import React, { useContext, useEffect, useState } from "react";
import './ScoreCart.css';
import Header from "../../Headerpage/header";
import Footer from "../../Footerpage/footer";
import { contextname } from "../../../contaxtapi/apidata";
import toast, { Toaster } from "react-hot-toast";


export function ScoreCart() {
    const [uservalue,setuservalue] = useState([])
    const [resultdata,setresultdata] = useState("FAIL")
    const localid = localStorage.getItem("user")
    const {answers,userapidata} = useContext(contextname)
    
    const datascore = answers.find((item)=>item._id == localid) 
  console.log(datascore)
   
 const totalscore = 30
 const userscore = datascore ? (datascore.jsscoral + datascore.reactscore) : 0;
const parcent = datascore ? ((userscore * 100) / totalscore).toFixed(2) : "0.00";

useEffect(() => {
    if (datascore) {
        if (parcent >= 33) {
            setresultdata("PASS");
        } else {
            setresultdata("FAIL");
        }
    }
}, [datascore]);

useEffect(()=>{
    const userdata = userapidata.find((item)=>item._id == localid) 
    if(userdata){
        setuservalue(userdata)
        console.log(userdata)
        // console.log(answers)
    }

},[userapidata])
    
   
      
     
            
    return (
        <> 
        <Toaster/>
           <Header/>
            <div id="scorecart-main">
                <div className="scorecart-contend">
                    <h2>Score-Cart</h2>
                    <table className="scorecart-mainu">
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                        </tr>
                        <tr>
                        <td>{uservalue.username}</td>
                        <td>{uservalue.number}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                        <tr>
                            <td>{uservalue.email}</td>
                            <td>{uservalue.password}</td>
                        </tr>
                        <tr>
                            <th>Java Script</th>
                            <th>React js</th>
                        </tr>
                        <tr>
                            <td>{datascore ? datascore.jsscoral : 0}</td>
                            <td>{datascore ? datascore.reactscore : 0}</td>
                        </tr>
                        <tr>
                            <th>Total Score</th>
                            <th>User Score</th>
                        </tr>
                        <tr>
                            <td>{totalscore}</td>
                            <td>{userscore}</td>
                        </tr>
                        <tr>
                            <th>Percent</th>
                            <th>Result</th>     
                        </tr>
                        <tr>
                            <td>{parcent}</td>
                            <td 
                            style={{backgroundColor : "rgba(255, 166, 0, 0.658)"}}>{resultdata}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    )
}