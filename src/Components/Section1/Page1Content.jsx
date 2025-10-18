import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

function Page1Content(props) {
  return (
    <div className='pb-10 pt-10 h-[90vh] flex  bg-gray-100 gap-12 py-18'>
        <LeftText />
        <RightText users={props.users}/>
    </div>
  )
}

export default Page1Content