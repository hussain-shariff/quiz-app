import React from 'react'

function InputForm({name, placeholder, value, type, setformData}) {
    
  return (
    <div className='relative group'>
        {/* <p className='absolute -top-2 left-2 '>{placeholder}</p> */}
        <input required name={name} id={name} value={value} type={type} className='mt-1 py-1 px-2 bg-white/0
        rounded-sm text-white w-full focus:outline-none' placeholder={ placeholder }
        onChange={setformData} />
        <div className='absolute w-full bg-white h-[1.5px]'></div>
    </div>
  )
}

export default InputForm