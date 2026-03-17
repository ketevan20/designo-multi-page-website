import Expertise from '@/components/molecules/Expertise/Expertise'
import HeroSection from '@/components/molecules/HeroSection/HeroSection'
import Team from '@/components/molecules/Team/Team'
import React from 'react'

const Home = () => {
  return (
    <div className='w-[90%] m-auto max-w-480 flex flex-col gap-40 mb-22'>
      <HeroSection />
      <Expertise />
      <Team />
      <img src={'/shared/desktop/bg-pattern-leaf.svg'} alt='leaf' className='absolute z-10 -bottom-76.5 right-0 rotate-180'/>
    </div>
  )
}

export default Home