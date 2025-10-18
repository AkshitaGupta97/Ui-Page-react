import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

function Page1Content() {
  return (
    <div className='px-8 pt-10 h-[90vh] flex  bg-gray-100 gap-12 py-18'>
        <LeftText />
        <RightText />
    </div>
  )
}

export default Page1Content