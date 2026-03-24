import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link'
import React from 'react'

type NavBarMobileProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
const NavBarMobile = ({ isOpen, setIsOpen }: NavBarMobileProps) => {
    return (
        <div>
            <div className='flex items-center justify-between py-[clamp(24px,6vh,64px)] relative z-200'>
                <Link href={'/'}>{<img src='/shared/desktop/logo-dark.png' className='w-49 h-6' />}</Link>
                <button onClick={() => { setIsOpen((!isOpen)) }}>{isOpen ? <X /> : <Menu />}</button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        style={{ originY: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className='absolute w-screen left-1/2 -translate-x-1/2 bg-[rgba(29,28,30,1)] px-6 py-12 z-200 flex flex-col gap-8 label text-white'
                    >
                        <Link href='/about' className='hover:underline' onClick={() => setIsOpen(false)}>
                            Our Company
                        </Link>
                        <Link href='/locations' className='hover:underline' onClick={() => setIsOpen(false)}>
                            Locations
                        </Link>
                        <Link href='/contact' className='hover:underline' onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default NavBarMobile