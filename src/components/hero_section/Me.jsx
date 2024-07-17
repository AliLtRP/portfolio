import React from 'react'
import userImg from "../../assets/user.png";
import Image from 'next/image';
import Vector from '@/assets/Vector';

const Me = () => {
  return (
    <div className="w-full relative">
        <div className="w-[385px] h-[431px] grad left-[-80px] top-14 ">
          <div className="img-grad absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]"></div>
        </div>

        <Image src={userImg} className="absolute inset-0 top-36 left-6" />
        <div className=" absolute inset-0 top-24 left-36">
            <p className=' absolute text-white top-[-17px] left-[85px] text-[19px]'>Hello! I Am Ibrahim Memon</p>
            <Vector/>
            <div className='w-[119px] h-0 border-[1px] bg-white opacity-40 absolute top-[108px] left-[99px]'></div>
            <p className='text-white absolute top-[89px] left-[100px] text-[17px] z-10'>A Designer who</p>
            <p className=' break-words w-96 text-white text-[50px] absolute top-[120px] left-[100px] leading-[58px]'>Judges a book by its cover...</p>
            <p className='w-full text-white text-[11px] absolute top-[240px] left-[100px]'>Because if the cover does not impress you what else can?</p>
        </div>
      </div>
  )
}

export default Me