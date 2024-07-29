import React from 'react'
import BgLinesCatCard from './BgLinesCatCard'

const BgLinesCard = () => {

    return (
        <div className='grid grid-cols-2 gap-[43px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[43px]'>
                <BgLinesCatCard imgsrc={"/rectangle-45@2x.png"} title={"Design"} />
                <BgLinesCatCard imgsrc={"/rectangle-46@2x.png"} title={"Web Development"} />
                <BgLinesCatCard imgsrc={"/rectangle-47@2x.png"} title={"App Develpoment"} />

                <BgLinesCatCard imgsrc={"/rectangle-48@2x.png"} title={"Data Analyst"} />

                <BgLinesCatCard imgsrc={"/rectangle-49@2x.png"} title={"Artificial Inteligence"} />

                <BgLinesCatCard imgsrc={"/rectangle-50@2x.png"} title={"Cyber Security"} />
                <BgLinesCatCard imgsrc={"/rectangle-51@2x.png"} title={"Project Management"} />

                <BgLinesCatCard imgsrc={"/rectangle-52@2x.png"} title={"Business"} />
        </div >

    )
}

export default BgLinesCard