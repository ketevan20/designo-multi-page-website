'use client'
import Button from '@/components/atoms/Button/Button'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

const LocationsContainer = () => {
    return (
        <div className='my-30 sm:my-0 grid gap-7.5 lg:grid-cols-3 text-center relative z-30'>
            {[
                {
                    bg: '-rotate-90',
                    illustration: '/shared/desktop/illustration-canada.svg',
                    title: 'canada',
                },
                {
                    bg: '-rotate-180',
                    illustration: '/shared/desktop/illustration-australia.svg',
                    title: 'australia',
                },
                {
                    bg: '',
                    illustration: '/shared/desktop/illustration-united-kingdom.svg',
                    title: 'united kingdom',
                }
            ].map((item, i) => (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", delay: 0.1 * i }}
                    viewport={{ once: true, amount: 0.5 }}
                    key={item.title} className='flex flex-col items-center gap-12'>
                    <div className='relative w-50 h-50 shrink-0 flex items-center justify-center'>
                        <img src="/home/desktop/bg-pattern-hero-home.svg" alt="" className={`absolute inset-0 w-full h-full ${item.bg} z-20`} />
                        <img src={item.illustration} alt="" className='relative z-30' />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className='label text-[rgba(51,49,54,1)]'>{item.title}</p>
                        <Link href={'/locations'}>
                            <Button text='see location' isWhite={false} />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default LocationsContainer