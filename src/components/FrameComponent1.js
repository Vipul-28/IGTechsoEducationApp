import React from 'react'
import FrameComponent1Card from './FrameComponent1Card';

const FrameComponent1 = () => {
    return (
        <div
        data-aos="zoom-in-left"
        className='bg-[#1C1C1C] py-[30px] lg:py-[70px] 2xl:items-center items-start justify-center   flex flex-col px-[30px] xl:px-[180px] '>
            <div>
                <h3 className='capitalize font-bold text-base lg:text-[24px] my-2 text-white'>Learn from the best instructors</h3>
                <p className='lg:text-[15px] leading-6 text-xs text-white'>Learn From the best instructors to gain insight,Master skills, and excel in your endeavors. Their<br className='hidden lg:block' /> expertise accelerates your progress.</p>

            </div>
            <div className='my-10 grid grid-cols-2 xl:gap-x-[35px] lg:grid-cols-4 lg:gap-x-[40px] md:gap-x-[20vw] gap-[30px] md:gap-y-[40px]'>

                <FrameComponent1Card imgsrc={"/profile-photo@2x.png"} text={"Michale"} />
                <FrameComponent1Card imgsrc={"/rectangle-82@2x.png"} text={"Tony Danza"} />
                <FrameComponent1Card imgsrc={"/rectangle-83@2x.png"} text={"Rick Wright"} />
                <FrameComponent1Card imgsrc={"/rectangle-84@2x.png"} text={"Kate Tanner"} />
            </div>
        </div >
    )
}

export default FrameComponent1
