import React from 'react'
import axois from 'axois'
function Rform() {


     const[formData,setFormData]=useState({
            username:"",
            email:"",
            password:"",
            mobile:"",
            role:"user",
        })
        const[message,setMessage]=useState(0);

        const handleChange=(e)=>{
           const{name,value}=e.target;
           setFormData(prev=>({
                ...prev,[name]:value,
           }))
        }

        const handleSubmit =async(e)=>{

             e.preventDefault();
             try {
                const responce= await axois.post("",formData);
                setMessage(responce.data.message)

               setFormData({
                username:"",               
                email:"",
                password:"",
                mobile:"",
                role:"user",
            })

             } catch (error) {
                setMessage("error connect to server")
             }


        }
  return (
    <>R-form

{message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        mobile:
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="user">user</option>
          <option value="admin" >admin</option>

        </select>
        <button type="submit">Register</button>
      </form>

    </>
  )
}

export default Rform