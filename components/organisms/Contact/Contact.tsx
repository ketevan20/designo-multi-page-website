import ContaxtForm from '@/components/molecules/ContactForm/ContaxtForm'
import LocationsContainer from '@/components/molecules/LocationsContainer/LocationsContainer'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-[90%] m-auto max-w-480 flex flex-col gap-40 mb-22'>
        <ContaxtForm />
        <LocationsContainer />
    </div>
  )
}

export default Contact