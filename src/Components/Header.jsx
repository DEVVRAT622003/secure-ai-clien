import React from 'react'
import header from '../../public/assets/header.png'
import footer from '../../public/assets/footer.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className='h-20 w-full bg-gray-200 shadow-lg z-30'>
      <div className='h-full'>
        <img src={header} alt="" className='h-full pl-3 cursor-pointer' onClick={()=> navigate('./')}/>
      </div>
    </div>
  )
}

export default Header
