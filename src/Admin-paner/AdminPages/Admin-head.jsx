import React from "react";
import "./AdminPanel.css";
import { Link } from "react-router-dom";



export function AdminPanel() {
    return (
        <>
         
                <aside className="sidebar">
                    <h3>Admin Dashboard</h3>
                    <ul>
                        <li><Link to={'/admin-home'}>Questions</Link></li>
                        <li><Link to={'/admin-user'}>Users</Link></li>
                        <li><Link to={'/admin-score'}>ScoreCart</Link></li>
                        <li><Link to={'#'}>Settings</Link></li>
                        <li><Link to={'/jsquestion'}>Homepage</Link></li>
                    </ul>
                </aside> 
        </>
    );
}
