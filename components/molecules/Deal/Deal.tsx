'use client'
import { motion } from 'motion/react'
import React from 'react'

const Deal = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true,  amount: 0.5 }}
            className='w-full bg-[rgba(253,243,240,1)] rounded-[15px] flex md:flex-row flex-col-reverse overflow-hidden relative z-30'>
            <div className='shrink-0 w-full md:w-[60%] px-6 md:px-20 py-16 md:py-20 lg:38 flex items-center justify-center'>
                <div className='md:max-w-135 flex flex-col gap-8 md:text-left text-center'>
                    <h1 className='h1 text-[rgba(231,129,107,1)]'>The real deal</h1>
                    <p className='body text-[rgba(51,49,54,1)]'>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. <br /> <br /> We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                </div>
            </div>

            <img src="/about/desktop/image-real-deal.jpg" alt="about us image" className='w-full md:w-[40%] object-cover max-md:max-h-80' />
        </motion.div>
    )
}

export default Deal