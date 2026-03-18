import ExpertiseItem from '@/components/atoms/ExpertiseItem/ExpertiseItem'
import CardsContainer from '@/components/molecules/CardsContainer/CardsContainer'
import ServiceCard from '@/components/molecules/ServiceCard/ServiceCard'
import Link from 'next/link'
import React from 'react'

const cardDetails = [
    {
        image: "/web-design/desktop/image-express.jpg",
        title: 'Express',
        text: 'A multi-carrier shipping website for ecommerce businesses'
    },
    {
        image: "/web-design/desktop/image-transfer.jpg",
        title: 'Transfer',
        text: 'Site for low-cost money transfers and sending money within seconds'
    },
    {
        image: "/web-design/desktop/image-photon.jpg",
        title: 'PHOTON',
        text: 'A state-of-the-art music player with high-resolution audio and DSP effects'
    },
    {
        image: "/web-design/desktop/image-builder.jpg",
        title: 'Builder',
        text: 'Connects users with local contractors based on their location'
    },
    {
        image: "/web-design/desktop/image-blogr.jpg",
        title: 'Blogr',
        text: 'Blogr is a platform for creating an online blog or publication'
    },
    {
        image: "/web-design/desktop/image-camp.jpg",
        title: 'camp',
        text: 'Get expert training in coding, data, design, and digital marketing'
    },
]

const WebDesign = () => {
  return (
    <div className='w-[90%] m-auto max-w-480 flex flex-col gap-40 mb-22'>
      <ServiceCard title='Web Design' text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.' />
      <img src={'/shared/desktop/bg-pattern-leaf.svg'} alt='leaf' className='absolute z-10 left-0 top-31.5' />

      <CardsContainer cardDetails={cardDetails}/>

      <div className='relative z-30 grid md:grid-cols-2 md:grid-rows-[308px] sm:grid-rows-[200px_200px] grid-rows-[250px_250px] gap-6 md:gap-7.5 '>
        <Link href={'/app'}>
          <ExpertiseItem bgImage='/home/desktop/image-app-design.jpg' expertise='App Design' />
        </Link>
        <Link href={'/graphic'}>
          <ExpertiseItem bgImage='/home/desktop/image-graphic-design.jpg' expertise='Graphic Design' />
        </Link>
      </div>
    </div>
  )
}

export default WebDesign