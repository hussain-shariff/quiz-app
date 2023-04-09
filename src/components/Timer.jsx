import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHourglassStart
    } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function Timer({countDownTime}) {
  const navigate = useNavigate()
  const [time, setTime] = useState(countDownTime * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigate("/score");
    }
  }, [time]);
  const minutes = Math.floor(time / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <div className='bg-[#0b1637] w-28 flex justify-center items-center text-white text-center p-3 rounded-md
        absolute -top-20 right-10 border border-gray-700'>
            <p><FontAwesomeIcon icon={faHourglassStart} className='h-4 mr-2'/>{minutes}:{seconds}</p>
    </div>
  )
}

export default Timer