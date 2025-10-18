import './index.css';
import './App.css'
import Section1Page from "./Components/Section1/Section1Page"


function App() {

  const users  = [
    {
      img: 'https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg',
      intro: 'A career is more than just a job; it’s a lifelong journey of self-discovery, contribution.',
      tag: 'Satisfied',
    },
    {
      img: 'https://img.freepik.com/premium-photo/lifestyle-smile-office-technology-one-males-indian-laptop-professional-men-sitting-businessman-happy_163305-210438.jpg',
      intro: 'Goal is a desire to aim for anything you want to achieve. Goals can help you physically, mentally',
      tag: 'Underserved',
    },
    {
      img: 'https://tse3.mm.bing.net/th/id/OIP.PCIn7FSQCQqLXDz_-zn5dQHaE8?cb=12ucfimg=1&w=540&h=360&rs=1&pid=ImgDetMain&o=7&rm=3',
      intro: 'Self satisfaction is immeasurable. Many people have great success stories, they are not satisfied ',
      tag: 'Excited',
    },
    {
      img: 'https://static.vecteezy.com/system/resources/previews/048/378/864/non_2x/a-young-happy-pretty-smiling-professional-business-woman-free-photo.jpg',
      intro: 'Satisfaction is one of the competitive advantages which help organization to grow internally. ',
      tag: 'Actualized',
    },
    {
      img: 'https://img.freepik.com/premium-photo/portrait-cheerful-business-women-tailored-suit_965238-3822.jpg',
      intro: 'Satisfaction is a positive emotional state that arises when a person achieves or attains . ',
      tag: 'Pleased',
    }, 
    {
      img: 'https://img.freepik.com/premium-photo/asian-business-lady-white-background_343960-23978.jpg',
      intro: 'Satisfaction is a positive emotional state that arises when a person achieves or attains . ',
      tag: 'Underwearable',
    }, 
    {
      img: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
      intro: 'A career is more than just a job; it’s a lifelong journey of self-discovery, contribution. ',
      tag: 'Assumed',
    }, 
    {
      img: 'https://img.freepik.com/premium-photo/portrait-businessman-suit-dark-background_168410-2468.jpg',
      intro: 'Satisfaction is a positive emotional state that arises when a person achieves or attains. ',
      tag: 'Pleased',
    }, 
    {
      img: 'https://images.wondershare.com/facengine_img/article/05/tips-how-to-make-your-company-profile-picture-look-professional-5.jpeg',
      intro: 'Satisfaction is a positive emotional state that arises when a person achieves or attains. ',
      tag: 'Contentment',
    },
     {
      img: 'https://plantlipids.com/wp-content/uploads/2024/02/coffee-job-males-happy-smile-office-men-person-indian-businessman-sitting-lifestyle-laptop-technology-manager-success.jpg',
      intro: 'A career is more than just a job; it’s a lifelong journey of self-discovery, contribution. ',
      tag: 'Average',
    },  
  ]

  return (
    <>
      <Section1Page users={users} />
    </>
  )
}

export default App