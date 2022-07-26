
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' ;

const Register = () => {
  
  
  const [credential,setcredential] = useState({username:" ",email: "",password:""})
  const navigate = useNavigate();

  const handleonsubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/auth/user/register", {
      // Default options are marked with *
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({ username:credential.username,email:credential.email,password:credential.password})

    });
    const json = await response.json()
    console.log(json)
    navigate("/success")
 
  }
  // to do learn about onchange
  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })

}


  return (
      <div className='container my-5 w-50'>
        <form onSubmit={handleonsubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">create username here</label>
            <input type="username" onChange={onChange} value={credential.username} name="username" className="form-control" id="username" aria-describedby="emailHelp" />
  
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">enter your email address</label>
            <input type="email" onChange={onChange} value={credential.email} name="email" className="form-control" id="email" aria-describedby="emailHelp" />
  
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" onChange={onChange} value={credential.password} name="password" className="form-control" id="password" />
          </div>
  
          <button type="submit" className="btn btn-success">Login</button>
        </form>
      </div>
    )
 
}

export default Register