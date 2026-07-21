import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] flex items-center justify-center gap-2'>
      <div className=' border-3 hover:border-[#D3fD50] hover:text-[#D3fD50]  text-[6.5vw] leading-[5.5vw] border-5 border-white rounded-full px-10 pt-2  uppercase'>
      <Link className='text-[6vw] lg:mt-6' to='/projects'> projets</Link>
      </div>
      <div className='border-3 hover:border-[#D3fD50] hover:text-[#D3fD50] text-[6.5vw] leading-[5.5vw] border-5 border-white rounded-full px-10 pt-2  uppercase'>
      <Link className='text-[6vw] lg:mt-6' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
