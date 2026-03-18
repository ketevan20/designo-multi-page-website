import Link from 'next/link'
import React from 'react'
import webImage from '/home/desktop/image-web-design-large.jpg'
import ExpertiseItem from '@/components/atoms/ExpertiseItem/ExpertiseItem'

const Expertise = () => {
    return (
        <div className='h-screen max-h-160 grid md:grid-cols-2 md:grid-rows-2 sm:grid-rows-[200px_200px_200px] grid-rows-[250px_250px_250px] gap-6 md:gap-7.5 '>
            <Link href='/web' className='row-span-1 md:row-span-2 md:col-span-1'>
                <ExpertiseItem bgImage='/home/desktop/image-web-design-large.jpg' expertise='Web Design' />
            </Link>
            <Link href={'/app'} className='row-span-1 col-span-1'>
                <ExpertiseItem bgImage='/home/desktop/image-app-design.jpg' expertise='App Design' />
            </Link>
            <Link href={'/graphic'} className='row-span-1 col-span-1'>
                <ExpertiseItem bgImage='/home/desktop/image-graphic-design.jpg' expertise='Graphic Design' />
            </Link>
        </div>
    )
}

export default Expertise