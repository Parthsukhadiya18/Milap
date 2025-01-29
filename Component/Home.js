import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Footer from './Footer'
import FunctionProps from './FunctionProps'
import ClassProps from './ClassProps'
import Funstate from './Funstate'
import Calcu from './Calcu'

function Home() {
  return (
    <div>

<Header/>
{/* <FunctionProps page="Home" city="Surat"/> */}
{/* <ClassProps page="Home"/>
 */}
 {/* <Funstate/> */}
 <Calcu/>
<Slider/>
<Footer/>


    </div>
  )
}

export default Home