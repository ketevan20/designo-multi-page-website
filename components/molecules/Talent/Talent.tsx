import React from 'react'

const Talent = () => {
    return (
        <div className='w-full bg-[rgba(253,243,240,1)] rounded-[15px] flex md:flex-row flex-col overflow-hidden relative z-30'>
            <img src="/about/desktop/image-world-class-talent.jpg" alt="about us image" className='w-full md:w-[40%] object-cover max-md:max-h-80' />

            <div className='shrink-0 w-full md:w-[60%] px-6 md:px-20 py-16 md:py-20 lg:38 flex items-center justify-center'>
                <div className='md:max-w-135 flex flex-col gap-8 md:text-left text-center'>
                    <h1 className='h1 text-[rgba(231,129,107,1)]'>World-class talent</h1>
                    <p className='body text-[rgba(51,49,54,1)]'>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.<br /><br />
                        Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                </div>
            </div>
        </div>
    )
}

export default Talent