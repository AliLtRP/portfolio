'use client'
import React from 'react'
import { Poppins } from "next/font/google";

const font = Poppins({
    weight: "400",
    subsets: ["latin"]
});

const Projects = () => {
    return (
        <div className={font.className + ' w-full px-16 my-72 relative'}>
            <div className="work-grad w-[625px] h-[700px] absolute right-0"></div>
            <div className="work-grad w-[625px] h-[700px] absolute right-52"></div>

            <div className='w-full flex relative'>
                <div className='flex flex-col gap-2'>
                    <p className=' text-[16px] text-[#9857D3] font-semibold'>Featured  Project</p>
                    <h1 className=' text-[#CCD6F6] text-[34px] font-semibold'>Example Project</h1>
                    <div className=' w-[669px] text-[18px] my-3 text-[#CCD6F6] font-medium h-[165px] rounded-2xl glass flex justify-center items-center relative z-10'>
                        <p className=' w-fit px-4'>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </p>
                    </div>
                </div>

                <div className=' bg-[#2B0B3A] min-w-[642.64px] h-[380.17px] rounded-xl absolute right-0 z-0 flex justify-end items-end'>
                    <div className='w-[90%] h-[90%] bg-white rounded-xl'></div>
                </div>
            </div>

            <div className='w-full flex flex-row-reverse relative mt-72'>
                <div className='flex flex-col gap-2'>
                    <p className=' text-[16px] text-[#9857D3] font-semibold'>Featured  Project</p>
                    <h1 className=' text-[#CCD6F6] text-[34px] font-semibold'>Example Project</h1>
                    <div className=' w-[669px] text-[18px] my-3 text-[#CCD6F6] font-medium h-[165px] rounded-2xl glass flex justify-center items-center relative z-10'>
                        <p className=' w-fit px-4'>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </p>
                    </div>
                </div>

                <div className=' bg-[#2B0B3A] min-w-[642.64px] h-[380.17px] rounded-xl absolute left-0 z-0 flex justify-end items-end'>
                    <div className='w-[90%] h-[90%] bg-white rounded-xl'></div>
                </div>
            </div>
        </div>
    )
}

export default Projects