import Button from '@/components/atoms/Button/Button'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full h-screen bg-[rgba(231,129,107,1)] rounded-[15px] px-24 flex items-center relative'>
            <img src={'/home/desktop/bg-pattern-hero-home.svg'} className='absolute right-0 top-0 bottom-0 z-20' />

            <div className='max-w-135 relative z-30'>
                <h1 className='h1 text-white'>Award-winning custom designs and digital branding solutions</h1>
                <p className='body text-white mt-2.75 mb-10'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <Button text="Learn More" />
            </div>

            <img src="/home/desktop/phone2.svg" alt="" className='absolute bottom-0 right-0 object-cover max-h-[90%] z-30' />

        </div>
    )
}

export default HeroSection