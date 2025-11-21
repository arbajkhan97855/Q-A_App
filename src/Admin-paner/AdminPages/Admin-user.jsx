import React, { useContext } from "react";
import { AdminPanel } from "./Admin-head";
import Header from "../../pages/Headerpage/header";
import Footer from "../../pages/Footerpage/footer";
import "./Admin-user.css"
import { contextname } from "../../contaxtapi/apidata";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export function AdminUserPage() {
    const { userapidata } = useContext(contextname)

    const DeleteUser = async (e) => {
        const apiurl = await fetch(`https://exampapae-api.vercel.app/users/${e}`,
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
                    <h2>Welcome to Admin Panel <button id="Add-btn" onClick={()=>{nextpage('/admin-user-add')}}>Add</button></h2>
                    <div className="table-container">
                        <table id="table">
                            <thead>
                                <tr>
                                    <th>Sr.no</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Password</th>
                                    <th>Image</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userapidata.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.number}</td>
                                        <td>{item.password}</td>
                                        <td><img src={item.useimage} height="40px" width="40px" alt="#" /></td>
                                        <td><button id="edit-btn"><Link to={`/admin-user/${item._id}`}>Edit</Link></button></td>
                                        <td><button id="delete-btn" onClick={()=>{DeleteUser(item._id)}}>Delete</button></td>
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