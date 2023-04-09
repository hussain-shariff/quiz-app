import React, {useEffect} from 'react'
import Question from '../components/Question'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'
import { useNavigate } from 'react-router-dom';

function EditQuestions() {
  const navigate = useNavigate()
  const { state } = useAppContext()
  const { quizQuestions } = state

  useEffect(()=>{
    if(quizQuestions.length === 0){
      navigate('/quiz')
    }
  },[quizQuestions])

  return (
    <div className='text-white mt-7 px-10 relative'>
        <div className='absolute top-12 left-14 rounded-full w-32 h-1 bg-[#3489ff]'></div>
        <h1 className='text-3xl font-semibold'>Manage Questions</h1>
        <div className='flex flex-col gap-3 mt-14'>
            {quizQuestions.map((item, idx)=>(
              <Question
                key={idx}
                question={item.question}/>
            ))}
            <Link to={'/quiz'} className='w-48 mx-auto'>
                <button className='border-2 rounded mt-20 border-[#3489ff] text-[#3489ff] px-10 py-2
                hover:bg-[#3489ff] hover:text-white transition ease-out duration-300'>Submit</button>
            </Link>
        </div>
    </div>
  )
}

export default EditQuestions