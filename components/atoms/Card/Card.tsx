import React from 'react'
type CardProps = {
    image: string;
    text: string;
    title: string;
}
const Card = ({image, text, title}: CardProps) => {
    return (
        <div className='group hover:cursor-pointer w-full h-full bg-[rgba(253,243,240,1)] rounded-[15px] overflow-hidden flex flex-col hover:bg-[rgba(231,129,107,1)] transition-colors duration-300'>
            <img src={image} alt="" className='max-h-full object-cover object-center' />
            <div className='flex-1 p-8 flex flex-col gap-4 items-center justify-center text-center'>
                <h1 className='group-hover:text-white label text-[rgba(231,129,107,1)] transition-colors duration-300'>{title}</h1>
                <p className='group-hover:text-white body text-[rgba(51,49,54,1)] transition-colors duration-300'>{text}</p>
            </div>
        </div>
    )
}

export default Card