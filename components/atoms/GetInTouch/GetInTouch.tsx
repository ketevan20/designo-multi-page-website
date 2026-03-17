import React from 'react'
import Button from '../Button/Button'

const GetInTouch = () => {
    return (
        <div className='w-[90%] max-w-480 m-auto overflow-hidden bg-[rgba(231,129,107,1)] rounded-[15px] relative z-30 -bottom-18 flex items-center justify-center px-6 py-16 sm:p-15 md:p-18'>
            <div className='flex items-center md:justify-between z-20 max-md:text-center max-md:flex-col justify-center'>
                <div className='md:max-w-[60%]'>
                    <h1 className='h2 text-white'>Let’s talk about<br /> your project</h1>
                    <p className='body text-white mt-2.75 mb-10'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <div className='flex-1 flex justify-end'>
                    <Button text='get in touch' />
                </div>
            </div>
            <img src="/shared/desktop/bg-pattern-call-to-action.svg" alt="" className='absolute right-0 z-10 w-219 h-146 object-cover' />
        </div>
    )
}

export default GetInTouch