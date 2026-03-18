import ExpertiseItem from '@/components/atoms/ExpertiseItem/ExpertiseItem'
import CardsContainer from '@/components/molecules/CardsContainer/CardsContainer'
import ServiceCard from '@/components/molecules/ServiceCard/ServiceCard'
import Link from 'next/link'
import React from 'react'

const cardDetails = [
    {
        image: "/app-design/desktop/image-airfilter.jpg",
        title: 'AIRFILTER',
        text: 'Solving the problem of poor indoor air quality by filtering the air'
    },
    {
        image: "/app-design/desktop/image-eyecam.jpg",
        title: 'EYECAM',
        text: 'Product that lets you edit your favorite photos and videos at any time'
    },
    {
        image: "/app-design/desktop/image-faceit.jpg",
        title: 'FACEIT',
        text: 'Get to meet your favorite internet superstar with the faceit app'
    },
    {
        image: "/app-design/desktop/image-todo.jpg",
        title: 'TODO',
        text: 'A todo app that features cloud sync with light and dark mode'
    },
    {
        image: "/app-design/desktop/image-loopstudios.jpg",
        title: 'LOOPSTUDIOS',
        text: 'Blogr is a platform for creating an online blog or publication'
    }
]

const AppDesign = () => {
    return (
        <div className='w-[90%] m-auto max-w-480 flex flex-col gap-40 mb-22'>
            <ServiceCard title='App Design' text='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.' />
            <img src={'/shared/desktop/bg-pattern-leaf.svg'} alt='leaf' className='absolute z-10 left-0 top-31.5' />

            <CardsContainer cardDetails={cardDetails} />

            <div className='relative z-30 grid md:grid-cols-2 md:grid-rows-[308px] sm:grid-rows-[200px_200px] grid-rows-[250px_250px] gap-6 md:gap-7.5 '>
                <Link href={'/web'}>
                    <ExpertiseItem bgImage='/home/desktop/image-web-design-large.jpg' expertise='Web Design' />
                </Link>
                <Link href={'/graphic'}>
                    <ExpertiseItem bgImage='/home/desktop/image-graphic-design.jpg' expertise='Graphic Design' />
                </Link>
            </div>
        </div>
    )
}

export default AppDesign