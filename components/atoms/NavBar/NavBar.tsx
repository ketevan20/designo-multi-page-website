import Link from 'next/link'
import React from 'react'

type NavBarProps = {
    light: boolean;
}

const NavBar = ({ light }: NavBarProps) => {
    return (
        <div className='w-full flex items-center justify-between'>
            <Link href={'/'}>{ light ? <img src='/shared/desktop/logo-dark.png' className='w-49 h-6' /> : <img src='/shared/desktop/logo-light.png' className='w-49 h-6' /> }</Link>
            <div className='flex gap-10.5 uppercase font-normal text-[14px] leading-3.5 tracking-[2px]' style={{color: light ? 'rgba(51, 49, 54, 1)' : 'rgba(255, 255, 255, 1)'}}>
                <Link href={'/about'} className='hover:underline'>Our Company</Link>
                <Link href={''} className='hover:underline'>Locations</Link>
                <Link href={''} className='hover:underline'>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar