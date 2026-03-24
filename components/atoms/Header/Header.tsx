'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import NavBarMobile from '../NavBarMobile/NavBarMobile'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='relative z-200! w-[90%] m-auto max-w-480 sm:py-[clamp(24px,6vh,64px)]'>
        <div className='hidden sm:block'>
          <NavBar light={true} />
        </div>
        <div className='block sm:hidden'>
          <NavBarMobile setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
      {isOpen && <div className='absolute inset-0 bg-[#00000037] z-40 block sm:hidden'></div>}
    </>
  )
}

export default Header