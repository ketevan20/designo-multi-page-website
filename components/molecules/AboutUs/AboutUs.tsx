'use client'
import { motion } from 'motion/react'
import React from 'react'

const AboutUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className='w-screen left-1/2 -translate-x-1/2 sm:w-full h-[calc(100vh-100px)] max-h-160 bg-[rgba(231,129,107,1)] sm:rounded-[15px] flex md:flex-row flex-col-reverse overflow-hidden relative z-30'>
            <div className='relative z-30 w-full md:w-[60%] px-6 md:px-20 py-16 md:py-0 flex items-center justify-center text-white'>
                <div className='md:max-w-135 flex flex-col gap-8 md:text-left text-center'>
                    <h1 className='h1'>About Us</h1>
                    <p className='body'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
                </div>
            </div>
            <img src="/about/desktop/image-about-hero.jpg" alt="about us image" className='relative z-30 w-full md:w-[40%] object-cover' />
            <img src="/about/desktop/bg-pattern-hero-about-desktop.svg" alt="" className='absolute left-0 z-10' />
        </motion.div>
    )
}

export default AboutUs