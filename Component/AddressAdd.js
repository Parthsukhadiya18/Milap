import React, { useState } from 'react'
import AddressForm from './AddressForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function AddressAdd() {
  const [massage, setMessage] = useState("")
  const handleAdd = async (data) => {
    try {
      await axios.post("Addressaddapi", data)
      setMessage(" Address add successful!")
      const navigate = useNavigate(); 
       navigate('/payment'); // Redirect to the payment page

    } catch (error) {
      setMessage("error Address add")
    }


  }
  return (
    <div>AddressAdd
      {massage && <p>{massage}</p>}

      <AddressForm onSubmit={(address) => {
        console.log(address)
        // const navigate = useNavigate();
        // navigate('/payment');
      }
      } />
      {/* <Route path="/address" element={<AddressForm onSubmit={(address) => console.log(address)} />} /> */}

    </div>
  )
}

export default AddressAdd