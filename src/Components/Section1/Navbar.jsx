import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-around px-10 py-18'>
        <h4 className='bg-black text-white px-8 py-10 rounded-full'>Target Goals</h4>
        <button>Focus</button>
        <button>Consistent</button>
    </div>
  )
}

export default Navbar