import React from 'react'

type ServiceCardProps = {
    title: string;
    text: string;
}
const ServiceCard = ({ title, text }: ServiceCardProps) => {
    return (
        <div className='overflow-hidden bg-[rgba(231,129,107,1)] rounded-[15px] relative z-30 flex items-center justify-center text-center px-6 py-16'>
            <div className='md:max-w-[60%] relative z-30'>
                <h1 className='h2 text-white'>{title}</h1>
                <p className='body text-white mt-6'>{text}</p>
            </div>
            <img src="/shared/desktop/bg-pattern-call-to-action.svg" alt="" className='absolute right-0 z-10 w-219 h-146 object-cover' />
        </div>
    )
}

export default ServiceCard