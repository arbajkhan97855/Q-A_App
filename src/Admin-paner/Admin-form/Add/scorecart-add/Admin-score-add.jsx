import React, { useState } from 'react'
import './Admin-score-add.css'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export function ScoreAddpage() {
    const [javascore, setjavascore] = useState("");
    const [reactscore, setreactscore] = useState("");

    const nextpage = useNavigate()

    async function Scorepapi() {
        const apiurl = await fetch("https://exampapae-api.vercel.app/scorecard", {
            method: "POST",
            body: JSON.stringify({ "jsscoral": javascore, "reactscore": reactscore }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => {
            toast.success("Add successfully your data")
        }).catch(() => {
            toast.error("network error")
        })

    }

    return (
        <>
            <Toaster />
            <div id="add-s-top">
                <form className="form" id="add-s-main" onSubmit={Scorepapi}>
                    <h3>Score Add</h3>
                    <input type="number" placeholder="enter your js score" onChange={(e) => { setjavascore(e.target.value) }} required />
                    <br />
                    <input type="number" placeholder="enter your react score" onChange={(e) => { setreactscore(e.target.value) }} required />
                    <br />
                    <button type='submit' >Post</button>
                    <button onClick={() => { setTimeout(() => { nextpage('/admin-score') }, 2000) }}>BACK</button>
                </form>
            </div>
        </>
    )
}