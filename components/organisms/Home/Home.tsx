import Expertise from '@/components/molecules/Expertise/Expertise'
import HeroSection from '@/components/molecules/HeroSection/HeroSection'
import Team from '@/components/molecules/Team/Team'
import React from 'react'

const Home = () => {
  return (
    <div className='w-[90%] m-auto max-w-480 flex flex-col gap-40'>
      <HeroSection />
      <Expertise />
      <Team />
    </div>
  )
}

export default Home