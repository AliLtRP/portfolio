'use client'
import Logo from '@/assets/Logo'
import React from 'react'

const NavBar = () => {
  return (
    <nav className=' w-full bg-[#1A0B2E] h-28'>
      <div className='w-full px-32 h-full flex justify-between items-center'>
          <Logo />

          <ul className='flex text-white gap-14'>
            <li className=' hover:cursor-pointer'>Home</li>
            <li className=' hover:cursor-pointer'>About</li>
            <li className=' hover:cursor-pointer'>Lab</li>
          </ul>
      </div>
    </nav>
  )
}

export default NavBar