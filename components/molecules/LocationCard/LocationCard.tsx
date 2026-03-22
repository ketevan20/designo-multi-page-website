'use client'
import { motion } from 'motion/react';
import React from 'react'

type LocationCardProps = {
    location: string;
    image: string;
    phoneNumber: string;
    email: string;
    title: string;
    address: string;
    city: string;
}

const LocationCard = ({ location, image, phoneNumber, email, title, address, city }: LocationCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className={`relative w-screen left-1/2 -translate-x-1/2 sm:w-full flex gap-0 sm:gap-7.5 ${location == 'Australia' ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col-reverse`}>
            <div className='relative overflow-hidden bg-[rgba(253,243,240,1)] sm:rounded-[15px] p-20 lg:w-[70%] flex flex-col justify-center gap-6 text-center sm:text-left'>
                <h1 className='h1 text-[rgba(231,129,107,1)]'>{location}</h1>
                <div className='flex gap-7.5 sm:flex-row flex-col body text-[rgba(51,49,54,1)] lg:max-w-135'>
                    <div className='flex-1'>
                        <span className='font-bold'>{title}</span><br />
                        <span>{address}</span><br />
                        <span>{city}</span>
                    </div>
                    <div className='flex-1'>
                        <span className='font-bold'>contact</span><br />
                        P : <span>{phoneNumber}</span> <br />
                        M : <span>{email}</span>
                    </div>
                </div>
                <img src="/shared/desktop/bg-pattern-three-circles.svg" alt="" className='absolute left-0 bottom-0' />
            </div>
            <div className='sm:rounded-[15px] lg:w-[30%] max-lg:max-h-81.5 overflow-hidden'>
                <img src={image} alt="canada" className="object-cover w-full h-full" />
            </div>
        </motion.div>
    )
}

export default LocationCard