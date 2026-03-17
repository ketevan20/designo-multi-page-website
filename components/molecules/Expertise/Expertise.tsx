import React from 'react'

const Expertise = () => {
    return (
        <div className='h-screen grid md:grid-cols-2 md:grid-rows-2 sm:grid-rows-[200px_200px_200px] grid-rows-[250px_250px_250px] gap-6 md:gap-7.5 '>
            <div className='relative row-span-1 md:row-span-2 md:col-span-1 overflow-hidden rounded-[15px] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center gap-6 cursor-pointer group' style={{ backgroundImage: 'url("/home/desktop/image-web-design-large.jpg")' }}>

                <div className='absolute inset-0 bg-[rgba(231,129,107,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                <h1 className='h2 text-white uppercase relative z-10'>Web Design</h1>
                <div className='flex gap-5 items-center relative z-10'>
                    <p className='label text-white'>VIEW PROJECTS</p>
                    <img src="/shared/desktop/icon-right-arrow.svg" alt="" className='w-1 h-2' />
                </div>
            </div>
            <div className='relative row-span-1 col-span-1 overflow-hidden rounded-[15px] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center gap-6 cursor-pointer group' style={{ backgroundImage: 'url("/home/desktop/image-app-design.jpg")' }}>

                <div className='absolute inset-0 bg-[rgba(231,129,107,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                <h1 className='h2 text-white uppercase relative z-10'>App Design</h1>
                <div className='flex gap-5 items-center relative z-10'>
                    <p className='label text-white'>VIEW PROJECTS</p>
                    <img src="/shared/desktop/icon-right-arrow.svg" alt="" className='w-1 h-2' />
                </div>
            </div>
            <div className='relative row-span-1 col-span-1 overflow-hidden rounded-[15px] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center gap-6 cursor-pointer group' style={{ backgroundImage: 'url("/home/desktop/image-graphic-design.jpg")' }}>

                <div className='absolute inset-0 bg-[rgba(231,129,107,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                <h1 className='h2 text-white uppercase relative z-10'>Graphic Design</h1>
                <div className='flex gap-5 items-center relative z-10'>
                    <p className='label text-white'>VIEW PROJECTS</p>
                    <img src="/shared/desktop/icon-right-arrow.svg" alt="" className='w-1 h-2' />
                </div>
            </div>
        </div>
    )
}

export default Expertise