import { MoveRight } from 'lucide-react';

function RightContent(props) {
  console.log(props.tag);

  return (
    <div className='h-full overflow-hidden shrink-0 relative w-60 bg-slate-400 rounded-3xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="pic" />
        
        <div className='absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 font-semibold text-xl flex justify-center items-start'>{props.id + 1}</h2>
            <div>
                <p className='text-shadow-2xs text-sm w-[90%] leading-relaxed font-medium text-slate-200 mb-10'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button className='bg-slate-700 text-white font-medium px-6 py-2 rounded-2xl text-lg'>{props.tag}</button>
                        <button className='bg-slate-700 text-white font-medium px-2 py-0 rounded-full text-lg'><MoveRight /></button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default RightContent