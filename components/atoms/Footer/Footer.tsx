import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'

const Footer = () => {
    return (
        <div className='w-full bg-[rgba(29,28,30,1)] pt-36 pb-18 flex flex-col gap-10'>
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
                <div className='flex gap-4 self-end'>
                    <img className='w-6 h-6' src="/shared/desktop/icon-facebook.svg" alt="" />
                    <img className='w-6 h-6' src="/shared/desktop/icon-youtube.svg" alt="" />
                    <img className='w-6 h-6' src="/shared/desktop/icon-twitter.svg" alt="" />
                    <img className='w-6 h-6' src="/shared/desktop/icon-pinterest.svg" alt="" />
                    <img className='w-6 h-6' src="/shared/desktop/icon-instagram.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer