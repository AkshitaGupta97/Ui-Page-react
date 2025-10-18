
import RightContent from './RightContent'

function RightText(props) {
  console.log(props.users);
  
  return (
    <div id='right-part' className='h-[70vh] flex gap-6 flex-nowrap overflow-x-auto rounded-3xl p-6 w-2/3 bg-gray-50'>
      {
        props.users.map((ele, idx) => {
          return <RightContent key={idx} id={idx} img={ele.img} intro={ele.intro} tag={ele.tag} />
          
        })
      }
    </div>
  )
}

export default RightText