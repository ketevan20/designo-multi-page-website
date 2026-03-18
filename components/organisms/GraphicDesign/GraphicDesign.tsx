import ExpertiseItem from '@/components/atoms/ExpertiseItem/ExpertiseItem'
import CardsContainer from '@/components/molecules/CardsContainer/CardsContainer'
import ServiceCard from '@/components/molecules/ServiceCard/ServiceCard'
import Link from 'next/link'
import React from 'react'

const cardDetails = [
    {
        image: "/graphic-design/desktop/image-change.jpg",
        title: 'TIM BROWN',
        text: 'A book cover designed for Tim Brown’s new release, ‘Change’'
    },
    {
        image: "/graphic-design/desktop/image-boxed-water.jpg",
        title: 'BOXED WATER',
        text: 'A simple packaging concept made for Boxed Water'
    },
    {
        image: "/graphic-design/desktop/image-science.jpg",
        title: 'SCIENCE!',
        text: 'A poster made in collaboration with the Federal Art Project'
    }
]

const GraphocDesign = () => {
  return (
    <div className='w-[90%] m-auto max-w-480 flex flex-col gap-40 mb-22'>
      <ServiceCard title='Graphic Design' text='We deliver eye-catching branding materials that are tailored to meet your business objectives.' />
      <img src={'/shared/desktop/bg-pattern-leaf.svg'} alt='leaf' className='absolute z-10 left-0 top-31.5' />

      <CardsContainer cardDetails={cardDetails} />

      <div className='relative z-30 grid md:grid-cols-2 md:grid-rows-[308px] sm:grid-rows-[200px_200px] grid-rows-[250px_250px] gap-6 md:gap-7.5 '>
        <Link href={'/app'}>
          <ExpertiseItem bgImage='/home/desktop/image-app-design.jpg' expertise='App Design' />
        </Link>
        <Link href={'/web'}>
          <ExpertiseItem bgImage='/home/desktop/image-web-design-large.jpg' expertise='Web Design' />
        </Link>
      </div>
    </div>
  )
}

export default GraphocDesign