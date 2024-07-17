'use client'
import React from 'react'
import { ReactTyped } from "react-typed";


const About = () => {
    return (
        <div className='w-full px-16 text-white my-20'>
            <ReactTyped strings={["I'm a Full Stack Web Developer."]} className='text-[50px]' typeSpeed={40} backDelay={1000} backSpeed={80} loop />
            <p className=' text-[21px]'>Currently, I'm a Software Engineer at PureTik,</p>
            <p className=' text-[22px] my-20 max-w-[850px]'>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                I make meaningful and delightful digital products that create an equilibrium
                between user needs and business goals.</p>
        </div>
    )
}

export default About