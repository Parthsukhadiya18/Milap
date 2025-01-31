import React, { useState } from "react";
import HeaderFunction from "./HeaderFunction";
import Footer from "./Footer";

function RegistationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    role: "user",
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
    const { username, email, password, mobile } = formData;
    if (!username || !email || !password || !mobile) {
      setMessage("all feild required!")
    }
    //  (!username)?setMessage("username feild required!"):""
    const users = JSON.parse(localStorage.getItem("users")) || []
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users))

    setFormData(({
      username: "",
      email: "",
      password: "",
      mobile: "",

    }))

    setMessage("registation successful!");
  }
  return (
    <div>
      {/* <HeaderFunction/> */}
        <h1>Registation Form</h1> 

      <div class="container-fluid">
        <div class="row">
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3 col-4">
              <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
              <input type="tel" className="form-control" id="exampleInputPassword1" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formData.email} onChange={handleChange} required />

            </div>
            <div className="mb-3 col-4">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
              <input type="tel" className="form-control" id="exampleInputPassword1" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="exampleInputPassword1" className="form-label">Role</label>
              <select class="form-select" aria-label="Default select example" name="role" value={formData.role} onChange={handleChange}>

                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
            </div>
            <div className="mb-3 col-4">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
   
  );
}

export default RegistationForm;
