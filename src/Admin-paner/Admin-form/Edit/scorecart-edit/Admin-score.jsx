import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Admin-score.css"

export function EditScorecartPage() {
  const { scorcart } = useParams();
  const nextjump = useNavigate()
  const [formData, setFormData] = useState({
    jsscoral: "",
    reactscore: "",
  });

  useEffect(() => { 
        fetch(`https://exampapae-api.vercel.app/scorecard/${scorcart}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
        .catch((err) => console.error("Error fetching data:", err));
    
  }, [scorcart]);

  // हैंडल इनपुट चेंज
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // हैंडल फॉर्म सबमिट
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://exampapae-api.vercel.app/scorecard/${scorcart}`, {
      method: "PATCH", // "PATCH" bhi kar skte ho
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
       toast.success("Successfull Edit Data")
       setTimeout(()=>{
           nextjump('/admin-home')
       },1000)
      })
      .catch((err) => {
        toast.error("Not Successfull Edit Data")
    });
  };

  return (
    <>

    <Toaster />
       <div id="admin-s-edit">
      <form onSubmit={handleSubmit} id="admin-s-container" >
        <h2>ScoreCart Edit</h2>
        <label>Java Script Score:</label>
        <input
          name="jsscoral"
          value={formData.jsscoral}
          onChange={handleChange}
        />
        <label>React Js Score:</label>
        <input
          name="reactscore"
          value={formData.reactscore}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
    </>
    
  );
}


