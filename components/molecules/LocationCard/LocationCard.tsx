import React from 'react'

const LocationCard = () => {
    return (
        <div className='w-full flex gap-7.5 lg:flex-row flex-col-reverse'>
            <div className='bg-[rgba(253,243,240,1)] rounded-[15px] p-20 lg:w-[70%] flex flex-col justify-center gap-6 text-center sm:text-left'>
                <h1 className='h1 text-[rgba(231,129,107,1)]'>Canada</h1>
                <div className='flex gap-7.5 sm:flex-row flex-col body text-[rgba(51,49,54,1)] lg:max-w-135'>
                    <div className='flex-1'>
                        <span className='font-bold'>Designo Central Office</span><br />
                        3886 Wellington Street<br />
                        Toronto, Ontario M9C 3J5
                    </div>
                    <div className='flex-1'>
                        <span className='font-bold'>contact</span><br />
                        P : +1 253-863-8967 <br />
                        M : contact@designo.co 
                    </div>
                </div>
            </div>
            <div className='rounded-[15px] lg:w-[30%] max-lg:max-h-81.5 overflow-hidden'>
                <img src="/locations/desktop/image-map-canada.png" alt="canada" className="object-cover w-full h-full"/>
            </div>
        </div>
    )
}

export default LocationCard