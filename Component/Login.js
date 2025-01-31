import React, { useState } from 'react'
import HeaderFunction from './HeaderFunction';

function Login() {
  const [formData, setFormData] = useState({

    email: "",
    password: "",
  })
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const storeusers = JSON.parse(localStorage.getItem("users")) || []

    const user = storeusers.find(user => user.email === email && user.password === password)

    if (user) {
      setMessage("login successful!");
    } else {
      setMessage("invalid email or password!");
    }



    setFormData(({

      email: "",
      password: "",
    }))


  }

  return (
    <div>
      {/* <HeaderFunction/> */}
      <h1>Login</h1>

     



      <div class="container-fluid">
        <div class="row">
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
           
            <div className="mb-3 col-4">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formData.email} onChange={handleChange} required />

            </div>
            <div className="mb-3 col-4">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={handleChange} required />
            </div>
          
            <div className="mb-3 col-4">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login