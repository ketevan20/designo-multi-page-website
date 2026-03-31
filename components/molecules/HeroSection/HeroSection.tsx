'use client'
import Button from '@/components/atoms/Button/Button'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true }}
            className='w-full lg:h-[calc(100vh-100px)] lg:max-h-160 bg-[rgba(231,129,107,1)] rounded-[15px] px-6 sm:px-16 pt-16 lg:pl-24 flex flex-col lg:flex-row items-center justify-between relative'>
            <img src={'/home/desktop/bg-pattern-hero-home.svg'} className='absolute right-0 top-0 bottom-0 z-20 h-full object-contain' />

            <div className='max-w-135 relative z-30 max-lg:text-center'>
                <h1 className='h1 text-white'>Award-winning custom designs and digital branding solutions</h1>
                <p className='body text-white mt-2.75 mb-10'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <Link href={'about'}><Button text="Learn More" /></Link>
            </div>

            <img src="/home/desktop/phone2.svg" alt="" className='relative lg:self-end bottom-0 right-0 object-cover max-h-[90%] xl:h-[90%] z-30' />

        </motion.div>
    )
}

export default HeroSection