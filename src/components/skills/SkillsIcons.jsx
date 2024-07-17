'use client'
import React from 'react'
import Figma from '@/assets/Figma'

const SkillsIcons = ({ className }) => {
    return (
        <div className={className + " w-full flex justify-center gap-4"}>
            <div className=' bg-[#251C31] w-[44px] h-[44px] rounded-full flex justify-center items-center'>
                <Figma />
            </div>
            <div className=' bg-[#251C31] w-[44px] h-[44px] rounded-full flex justify-center items-center'>
                <Figma />
            </div>
            <div className=' bg-[#251C31] w-[44px] h-[44px] rounded-full flex justify-center items-center'>
                <Figma />
            </div>
            <div className=' bg-[#251C31] w-[44px] h-[44px] rounded-full flex justify-center items-center'>
                <Figma />
            </div>
            <div className=' bg-[#251C31] w-[44px] h-[44px] rounded-full flex justify-center items-center'>
                <Figma />
            </div>
            <div className=' bg-[#251C31] w-[44px] h-[44px] rounded-full flex justify-center items-center'>
                <Figma />
            </div>
        </div>
    )
}

export default SkillsIcons