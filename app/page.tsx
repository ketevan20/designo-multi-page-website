'use client'
import Home from '@/components/organisms/Home/Home'
import { motion } from 'motion/react';
import React from 'react'

const items = ["A", "B", "C", "D"];

const page = () => {
  return (
    <div className='relative overflow-hidden'>
      <Home />
    </div>
  )
}

export default page