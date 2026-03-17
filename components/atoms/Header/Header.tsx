import Link from 'next/link'
import React from 'react'
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <div className='w-[90%] m-auto max-w-480 py-[clamp(24px,6vh,64px)]'>
        <NavBar light={true} />
    </div>
  )
}

export default Header