import React from 'react'

type ButtonProps = {
    text: string;
}

const Button = ({text}: ButtonProps) => {
  return (
    <button className='bg-white text-[rgba(51,49,54,1)] rounded-lg py-4 px-6 text-[15px] uppercase tracking-[1px] font-medium hover:bg-[rgba(255,173,155,1)] hover:text-white'>{text}</button>
  )
}

export default Button