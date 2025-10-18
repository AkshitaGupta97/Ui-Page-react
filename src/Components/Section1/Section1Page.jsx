
import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

function Section1Page(props) {
  console.log(props.users);
  
  return (
    <div className='h-screen w-full bg-slate-200'>
        <Navbar />
        <Page1Content users={props.users}/>
    </div>
  )
}

export default Section1Page