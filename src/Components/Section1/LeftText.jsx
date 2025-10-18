import { MoveUpRight } from 'lucide-react';

function LeftText() {
  return (
    <div className='flex flex-col justify-between h-[70vh] w-1/3 bg-gray-50'>
      <div className='p-6'>
        <h3 className=' leading-[1.2] mb-8 text-5xl font-bold'>Prospective <br /> <span>Customer</span> <br /> <span> Segmentation</span></h3>
        <p className='text-lg font-thin text-gray-800'>Success means achieving your goals with hard work, discipline, and focus.
          It is not just winning but also learning from failures</p>
      </div>
      <div className='text-8xl'>
        <MoveUpRight />
      </div>
    </div>
  )
}

export default LeftText