import LocationCard from '@/components/molecules/LocationCard/LocationCard'
import React from 'react'

const Locatinos = () => {
  return (
    <div className='w-[90%] m-auto max-w-480 flex flex-col gap-8 mb-22'>
      <LocationCard location='Canada' image='/locations/desktop/image-map-canada.png' title='Designo Central Office' phoneNumber='+1 253-863-8967' email='contact@designo.co' address='3886 Wellington Street' city='Toronto, Ontario M9C 3J5'/>
      <LocationCard location='Australia' image='/locations/desktop/image-map-australia.png' title='Designo AU Office' phoneNumber='+1 253-863-8967' email='contact@designo.co' address='3886 Wellington Street' city='Toronto, Ontario M9C 3J5'/>
      <LocationCard location='United Kingdom' image='/locations/desktop/image-map-united-kingdom.png' title='Designo UK Office' phoneNumber='+1 253-863-8967' email='contact@designo.co' address='3886 Wellington Street' city='Toronto, Ontario M9C 3J5'/>
    </div>
  )
}

export default Locatinos