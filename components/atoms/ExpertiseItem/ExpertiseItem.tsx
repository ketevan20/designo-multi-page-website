import React from 'react'

type ExpertiseItemProps = {
    bgImage: string;
    expertise: string;
}

const ExpertiseItem = ({bgImage, expertise}: ExpertiseItemProps) => {
    return (
        <div className='h-full w-full relative overflow-hidden rounded-[15px] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center gap-6 cursor-pointer group' style={{ backgroundImage: `url(${bgImage})` }}>

            <div className='absolute inset-0 bg-[rgba(231,129,107,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

            <h1 className='h2 text-white uppercase relative z-10'>{expertise}</h1>
            <div className='flex gap-5 items-center relative z-10'>
                <p className='label text-white'>VIEW PROJECTS</p>
                <img src="/shared/desktop/icon-right-arrow.svg" alt="" className='w-1 h-2' />
            </div>
        </div>
    )
}

export default ExpertiseItem