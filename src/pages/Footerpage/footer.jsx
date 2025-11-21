import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="score-footer">
            <div className="footer-container">
                <p>© {new Date().getFullYear()} ScoreCart App. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <Link to={'/admin-login'}>Designer</Link>
                </div>
            </div>
        </footer>
    );
}
