import React, { useEffect, useRef, useState } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
   const [profileapi,setprofileapi] = useState([])

   
  // header
  const toggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const toggle = toggleRef.current;
    const nav = navRef.current;

    const handleToggle = () => {
      nav.classList.toggle('active');
    };

    toggle.addEventListener('click', handleToggle);

    // Cleanup on unmount
    return () => {
      toggle.removeEventListener('click', handleToggle);
    };
  }, []);

  async function Profile() {
    const userdata = localStorage.getItem("user")
    const apiurl =  await fetch(`https://exampapae-api.vercel.app/users/${userdata}`)
    const convert = await apiurl.json()
    setprofileapi(convert)
  }

  const ShowProfile = () =>{
    const profileid = document.getElementById("profile-main")
    profileid.style.display = "block"
  }
  const HideProfile = () =>{
    const profileid = document.getElementById("profile-main")
    profileid.style.display = "none"
  }

  const nextpage = useNavigate()

  useEffect(()=>{
    Profile()
  },[])
  return (
    <>
    <div id='mean-cont'>
    <header>
      <div className="logo" onClick={ShowProfile}><img src={profileapi.useimage} alt="" /></div>
      <div className="menu-toggle" id="menu-toggle" ref={toggleRef}>&#9776;</div>
      <nav id="nav" ref={navRef}>
        <Link to={'/jsquestion'}>Java Script</Link>
        <Link to={'/reactquestion'}>React js</Link>
        <Link to={'/scorecart'}>Score cart</Link>
        <Link to={'/'}>Logout</Link>
      </nav>

    </header>

{/* profile */}
   
    <div id='profile-main'>
    <div className='profile-container'>
      <p><span>id:-{profileapi._id}</span> <i class="fa-solid fa-x" onClick={HideProfile}></i></p>
      <div className='img'><img src={profileapi.useimage} height="100px" width="100px"/></div>
      <div id='profile-detail'>
      <h5>Name : {profileapi.username}</h5>
      <h5>Email : {profileapi.email}</h5>
      <h5>Number : {profileapi.number}</h5>
      </div>
      <div className='button'><button onClick={()=>{nextpage('/edit')}}>Edit</button></div>
    </div>
    </div>

    </div>
    </>
  );
};

export default Header;
