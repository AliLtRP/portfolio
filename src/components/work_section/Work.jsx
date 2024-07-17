import React from 'react'

const Work = () => {
    return (
        <div className=' w-[1000px] h-full text-white relative my-40'>
            <div className='w-[625px] h-[700px] absolute work-grad top-2/4 left-2/4 translate-x-[-40%] translate-y-[-75%]'></div>
            <p className=' text-[40px]'>Work Experience</p>
            <div className='w-full flex flex-col gap-4 my-16 overflow-x-visible'>
                <div className='w-full flex gap-4'>
                    <div className='w-[570px] h-[192px] work-div-grad rounded-2xl border-t-[4px] border-[#4F228D]'>
                        <div>

                        </div>
                    </div>
                    <div className='w-[570px] h-[192px] work-div-grad rounded-2xl'></div>
                </div>
                <div className='w-full flex gap-4'>
                    <div className='w-[570px] h-[192px] work-div-grad rounded-2xl'></div>
                    <div className='w-[570px] h-[192px] work-div-grad rounded-2xl'></div>
                </div>
            </div>
        </div>
    )
}

export default Work