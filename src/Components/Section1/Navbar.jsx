import React from 'react'

function Navbar() {
  return (
    <div className="flex items-center justify-around py-6 px-16 ">
        <h3 className="bg-black text-white text-xl font-bold rounded-full px-8 py-4 tracking-widest">Target Goals</h3>
       <div className='flex justify-start gap-3'>
            <button className="bg-gray-400 text-xs font-bold uppercase rounded-full px-8 py-4 tracking-widest">Focus</button>
            <button className="bg-gray-400 text-xs font-bold uppercase rounded-full px-8 py-4 tracking-widest">Consistent</button>
       </div>
    </div>

  )
}

export default Navbar