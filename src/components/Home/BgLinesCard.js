import React from 'react'
import BgLinesCatCard from './BgLinesCatCard'

const BgLinesCard = () => {

    return (
        <div className='grid grid-cols-2  relative left-4 md:grid-cols-3 lg:grid-cols-4 mq1400:ml-[180px]       mq1400:mr-[200px]  mr-[250px]  ml-[100px] mq1350:m-auto '>
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