import React, { useContext } from "react";
import { AdminPanel } from "./Admin-head";
import "./Admin-home.css"
import { contextname } from "../../contaxtapi/apidata";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export function AdminHomePage() {
    const { question } = useContext(contextname)

    const DeleteQuestion = async (e) => {
        const apiurl = await fetch(`https://exampapae-api.vercel.app/question/${e}`,
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
            <div className="admin-panel">
                <AdminPanel />
                <main className="main-content">
                    <h2>Welcome to Admin Panel <button id="Add-btn" onClick={()=>{nextpage('/admin-question-add')}}>Add</button></h2>
                    <div className="table-container">
                        <table id="table">
                            <thead>
                                <tr>
                                    <th>Sr.no</th>
                                    <th>Category</th>
                                    <th>Question</th>
                                    <th>Option-1</th>
                                    <th>Option-2</th>
                                    <th>Option-3</th>
                                    <th>Option-4</th>
                                    <th>Answer</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {question.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.category}</td>
                                        <td>{item.qst}</td>
                                        <td>{item.options1}</td>
                                        <td>{item.options2}</td>
                                        <td>{item.options3}</td>
                                        <td>{item.options4}</td>
                                        <td>{item.result}</td>
                                        <td><button id="edit-btn"><Link to={`/admin-home/${item._id}`}>Edit</Link></button></td>
                                        <td><button id="delete-btn" onClick={()=>{DeleteQuestion(item._id)}}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    )
}