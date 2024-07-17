import React from 'react'
import Figma from '@/assets/Figma'
import SkillsIcons from './SkillsIcons'
import SkillsLines from '@/assets/SkillsLines'
import LogoNeon from '@/assets/LogoNeon'
import Elepse from '@/assets/Elepse'


const Skills = () => {
    return (
        <div className='w-[1000px] h-full flex flex-col items-center text-white relative'>
            <p className=' text-2xl'>I'm currently looking to join a <span className=' text-[#A362FF]'>cross-functional</span> team that <span className=' text-[17px] text-center block'>values improving people's lives through accessible design</span></p>
            <div className='w-full flex flex-col items-center justify-center text-black gap-4 my-8'>
                <SkillsIcons className="gap-5" />
                <SkillsIcons className="gap-3 my-1 z-10" />
            </div>
            <div className='w-full h-[150px] relative'>
                <SkillsLines className=" absolute top-[-53px] right-[350px]" />
            </div>

            <div className='skills-circle-grad w-[180px] h-[180px] flex justify-center items-center z-10'>
                <LogoNeon className="z-20"/>
            </div>
            <div className='w-[295px] h-[294px] rounded-full border-b-[1px] border-[#763CAC] skills-rounded z-0 absolute top-[445px]'></div>
            <div className='w-[295px] h-[294px] rounded-full border-b-[1px] border-[#763CAC] skills-rounded z-0 absolute top-[460px]'></div>
            <Elepse className=" absolute top-[420px]"/>
            <div className='skills-grad w-[542px] h-[330px] absolute top-[350px] left-71'></div>
        </div>
    )
}

export default Skills