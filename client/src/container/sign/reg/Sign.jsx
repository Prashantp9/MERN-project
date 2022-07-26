import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' ;

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sign = (props) => {




  const [credential,setcredential] = useState({email: "",password:""})
  const navigate = useNavigate();

  const handleonsubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/auth/user/login", {
      // Default options are marked with *
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({ username:credential.email,password:credential.password})

    });
    const json = await response.json()
    console.log(json)
    if(json.success){
      //  save the authtoken in the local storage and redirect 
    
    localStorage.setItem("token",json.authToken)
    navigate("/");
    
  }
    else{
    toast.error("invalild credentials", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
      
    }
  }
  // to do learn about onchange
  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })

}
  
  return (
    <div className='container my-5 w-50'>
      <form onSubmit={handleonsubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Enter username here</label>
          <input type="username" onChange={onChange} value={credential.email} name="email" className="form-control" id="email" aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" onChange={onChange} value={credential.password} name="password" className="form-control" id="password" />
        </div>

        <button type="submit" className="btn btn-success">Login</button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Sign;