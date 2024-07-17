/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import Image from 'next/image';
import userImg from "../../assets/user.png";
import Vector from '@/assets/Vector';
import Circle from '@/assets/Circle';

const Hero = () => {
  return (
    <div className="w-full px-16 flex my-24">
      <div className="w-full relative">
        <div className="w-[385px] h-[431px] grad left-[-80px] top-14 ">
          <div className="img-grad absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
        <Image src={userImg} alt="User Image" className="absolute inset-0 top-36 left-6" />
        <div className="absolute inset-0 top-24 left-36">
          <p className='w-[270px] absolute text-white top-[-17px] left-[85px] text-[19px]'>
            Hello! I Am <span className='text-[#7127BA]'>Ali Ahmed</span>
          </p>
          <Vector />
          <div className='w-[137px] h-0 border-[1px] bg-white opacity-40 absolute top-[109px] left-[99px]'></div>
          <p className='text-white absolute top-[89px] left-[100px] text-[17px] z-10 w-[200px]'>A Designer who</p>
          <p className='break-words w-[450px] text-white text-[50px] absolute top-[120px] left-[100px] leading-[58px] -tracking-tighter'>
            Judges a book by its <Circle className="absolute top-[56px] left-[161px]" /> <span className='text-[#7127BA]'>cover...</span>
          </p>
          <p className='w-[330px] text-white text-[11px] absolute top-[245px] left-[100px]'>
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero;
