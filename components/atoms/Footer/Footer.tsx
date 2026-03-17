import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon, youtubeIcon } from '@/Icons/Icons'
import GetInTouch from '../GetInTouch/GetInTouch'

const Footer = () => {
    return (
        <div>
            <GetInTouch />
            <div className='w-full bg-[rgba(29,28,30,1)] pt-36 pb-18'>
                <div className='flex flex-col gap-10 w-[90%] m-auto max-w-480'>
                    <NavBar light={false} />
                    <div className='bg-[rgba(255,255,255,1)] w-full h-px opacity-10'></div>
                    <div className='flex justify-between text-[rgba(255,255,255,1)] opacity-50 font-normal text-[16px] leading-6.5'>
                        <p>
                            <span className='font-bold'>Designo Central Office</span> <br />
                            3886 Wellington Street <br />
                            Toronto, Ontario M9C 3J5
                        </p>
                        <p className='font-bold'>
                            Contact Us (Central Office)<br />
                            P : +1 253-863-8967 <br />
                            M : contact@designo.co
                        </p>
                        <div className='flex gap-4 items-center self-end text-[rgba(231,129,107,1)]'>
                            <a className='hover:text-[rgba(255,173,155,1)]'>{facebookIcon}</a>
                            <a className='hover:text-[rgba(255,173,155,1)]'>{youtubeIcon}</a>
                            <a className='hover:text-[rgba(255,173,155,1)]'>{twitterIcon}</a>
                            <a className='hover:text-[rgba(255,173,155,1)]'>{pinterestIcon}</a>
                            <a className='hover:text-[rgba(255,173,155,1)]'>{instagramIcon}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer