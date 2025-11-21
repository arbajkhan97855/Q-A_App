import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Admin-answer-edit.css"
export function EditQuestionPage() {
  const { id } = useParams();
  const nextjump = useNavigate()
  const [formData, setFormData] = useState({
    category: "",
    qst: "",
    options1: "",
    options2: "",
    options3: "",
    options4: "",
    result: "",
  });

  useEffect(() => { 
        fetch(`https://exampapae-api.vercel.app/question/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
        .catch((err) => console.error("Error fetching data:", err));
    
  }, [id]);

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
    fetch(`https://exampapae-api.vercel.app/question/${id}`, {
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
       <div id="admin-q-edit">
      <form onSubmit={handleSubmit} id="admin-q-container" >
        <h2>Question Edit</h2>
        <label>Category:</label>
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <label>Question:</label>
        <textarea
          name="qst"
          value={formData.qst}
          onChange={handleChange}
        />
        <label>Options 1:</label>
        <input
          name="options1"
          value={formData.options1}
          onChange={handleChange}
        />
        <label>Options 2:</label>
        <input
          name="options2"
          value={formData.options2}
          onChange={handleChange}
        />
        <label>Options 3:</label>
        <input
          name="options3"
          value={formData.options3}
          onChange={handleChange}
        />
        <label>Options 4:</label>
        <input
          name="options4"
          value={formData.options4}
          onChange={handleChange}
        />
        <label>Answer:</label>
        <input
          name="result"
          value={formData.result}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
    </>
    
  );
}


