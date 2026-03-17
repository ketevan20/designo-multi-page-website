import React from 'react'

const Team = () => {
    return (
        <div className='flex gap-7.5 flex-col md:flex-row justify-between md:text-center relative z-30'>
            {[
                {
                    bg: '-rotate-90',
                    illustration: '/home/desktop/illustration-passionate.svg',
                    title: 'PASSIONATE',
                    text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
                },
                {
                    bg: '-rotate-180',
                    illustration: '/home/desktop/illustration-resourceful.svg',
                    title: 'RESOURCEFUL',
                    text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
                },
                {
                    bg: '',
                    illustration: '/home/desktop/illustration-friendly.svg',
                    title: 'FRIENDLY',
                    text: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
                }
            ].map((item) => (
                <div key={item.title} className='flex md:flex-col items-center gap-12'>
                    <div className='relative w-50 h-50 shrink-0 flex items-center justify-center'>
                        <img src="/home/desktop/bg-pattern-hero-home.svg" alt="" className={`absolute inset-0 w-full h-full ${item.bg} z-20`} />
                        <img src={item.illustration} alt="" className='relative z-30' />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className='label text-[rgba(51,49,54,1)]'>{item.title}</p>
                        <p className='body text-[rgba(51,49,54,1)]'>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Team

{/* <div className='grid gap-x-7.5 gap-y-12 grid-cols-3 grid-rows-2 justify-center text-center'>
            <div className='m-auto'>
                <img src="/home/desktop/bg-pattern-hero-home.svg" alt="" className='absolute w-50 h-50 -rotate-90 z-20'/>
                <img src="/home/desktop/illustration-passionate.svg" alt="" className='relative z-30'/>
            </div>

            <div className='m-auto'>
                <img src="/home/desktop/bg-pattern-hero-home.svg" alt="" className='absolute w-50 h-50 -rotate-180 z-20'/>
                <img src="/home/desktop/illustration-resourceful.svg" alt="" className='relative z-30'/>
            </div>

            <div className='m-auto'>
                <img src="/home/desktop/bg-pattern-hero-home.svg" alt="" className='absolute w-50 h-50 z-20'/>
                <img src="/home/desktop/illustration-friendly.svg" alt="" className='relative z-30'/>
            </div>

            <div className='flex flex-col gap-8'>
                <p className='label text-[rgba(51,49,54,1)]'>PASSIONATE</p>
                <p className='body text-[rgba(51,49,54,1)]'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
            </div>

            <div className='flex flex-col gap-8'>
                <p className='label text-[rgba(51,49,54,1)]'>RESOURCEFUL</p>
                <p className='body text-[rgba(51,49,54,1)]'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
            </div>

            <div className='flex flex-col gap-8'>
                <p className='label text-[rgba(51,49,54,1)]'>FRIENDLY</p>
                <p className='body text-[rgba(51,49,54,1)]'> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
            </div>



        </div> */}