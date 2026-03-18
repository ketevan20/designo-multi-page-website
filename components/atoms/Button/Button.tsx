import React from 'react'

type ButtonProps = {
    text: string;
    isWhite?: boolean;
}

const Button = ({text, isWhite=true}: ButtonProps) => {
  return (
    <button className={`${isWhite ? 'bg-white' : 'bg-[rgba(231,129,107,1)]'} shrink-0 ${isWhite ? 'text-[rgba(51,49,54,1)]' : 'text-white'} rounded-lg py-4 px-6 text-[15px] uppercase tracking-[1px] font-medium hover:bg-[rgba(255,173,155,1)] hover:text-white`}>{text}</button>
  )
}

export default Button