import React, { useContext} from "react";
import { AdminPanel } from "./Admin-head";
import Header from "../../pages/Headerpage/header";
import Footer from "../../pages/Footerpage/footer";
import "./Admin-score.css"
import { contextname } from "../../contaxtapi/apidata";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export function AdminScorePage() {
    const { answers } = useContext(contextname)
    const totalscore = 20
    const DeleteScorecart = async (e) => {
        const apiurl = await fetch(`https://exampapae-api.vercel.app/scorecard/${e}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        ).then(()=>{
           toast.success("Succefull Delete Data")
           setTimeout(()=>{
               window.location.reload()
           },1500)
        }).catch(()=>{
            toast.error("Not Deleted Data")
        })
    }
    const nextpage = useNavigate()
    return (
        <> 
        <Toaster/>
            <Header />
            <div className="admin-panel">
                <AdminPanel />
                <main className="main-content">
                    <h2>Welcome to Admin Panel <button id="Add-btn" onClick={()=>{nextpage('/admin-score-add')}}>Add</button></h2>
                    <div className="table-container">
                        <table id="table">
                            <thead>
                                <tr>
                                    <th>Sr.no</th>
                                    <th>Id</th>
                                    <th>Js Score</th>
                                    <th>React Score</th>
                                    <th>User Score</th>
                                    <th>Total</th>
                                    <th>Parcent</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {answers.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item._id}</td>
                                        <td>{item.jsscoral}</td>
                                        <td>{item.reactscore}</td>
                                        <td>{(item.jsscoral) + (item.reactscore)}</td>
                                        <td>{totalscore}</td>
                                        <td>{((item.jsscoral) + (item.reactscore))/totalscore * 100}</td>
                                        <td><button id="edit-btn"><Link to={`/admin-score/${item._id}`}>Edit</Link></button></td>
                                        <td><button id="delete-btn" onClick={()=>{DeleteScorecart(item._id)}}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
            <Footer />

        </>
    )
}