'use client'
import Card from '@/components/atoms/Card/Card';
import { motion } from 'motion/react';
import React from 'react'

type CardDetail = {
    image: string;
    title: string;
    text: string;
}

type CardsContainerProps = {
    cardDetails: CardDetail[];
}


const CardsContainer = ({ cardDetails }: CardsContainerProps) => {
    return (
        <div className='relative z-30 grid grid-cols-1 max-md:auto-rows-[310px] max-sm:auto-rows-auto md:grid-cols-3 gap-7.5'>
            {
                cardDetails.map((detail, index) =>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}>
                        <Card image={detail.image} text={detail.text} title={detail.title} />
                    </motion.div>
                )
            }
        </div>
    )
}

export default CardsContainer