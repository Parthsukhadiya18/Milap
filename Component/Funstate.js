import React, { useState } from 'react'

function Funstate() {

  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    setCount(count - 1)
  }


  if(count<0){
    setCount(0)
  }

  if(count>5){
    setCount(5)
  }
  return (
    <div>Funstate
      <h1>Count:{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>


    </div>
  )
}

export default Funstate