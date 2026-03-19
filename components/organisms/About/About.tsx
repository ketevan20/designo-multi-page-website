import AboutUs from '@/components/molecules/AboutUs/AboutUs'
import Deal from '@/components/molecules/Deal/Deal'
import LocationsContainer from '@/components/molecules/LocationsContainer/LocationsContainer'
import Talent from '@/components/molecules/Talent/Talent'
import React from 'react'

const About = () => {
  return (
    <div className='w-[90%] m-auto max-w-480 flex flex-col gap-40 mb-22 '>
      <AboutUs />
      <img src={'/shared/desktop/bg-pattern-leaf.svg'} alt='leaf' className='absolute z-10 left-0 top-80' />
      <Talent />
      <LocationsContainer />
      <Deal />
    </div>
  )
}

export default About