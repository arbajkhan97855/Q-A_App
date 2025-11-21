import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Admin-user-edit.css"
export function EditUserPage() {
  const { userid } = useParams();
  const nextjump = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
    useimage: "",
  });

  useEffect(() => { 
        fetch(`https://exampapae-api.vercel.app/users/${userid}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
        .catch((err) => console.error("Error fetching data:", err));
    
  }, [userid]);

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
    fetch(`https://exampapae-api.vercel.app/users/${userid}`, {
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
       <div id="admin-u-edit">
      <form onSubmit={handleSubmit} id="admin-u-container" >
        <h2>User Edit</h2>
        <label>Username:</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
       
        <label>Email:</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
        <label>Number:</label>
        <input
          name="number"
          value={formData.number}
          onChange={handleChange}
          type="number"
        />
        <label>Password:</label>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />
        <label>Useimage:</label>
        <input
          name="useimage"
          value={formData.useimage}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
    </>
    
  );
}


