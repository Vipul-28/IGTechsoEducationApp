import { FaInstagram } from "react-icons/fa";
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";

const InstructorCard = ({ imgsrc, text }) => {
    return (
        <div className="xl:h-[230px] lg:w-[20.5vw] xl:w-[230px] md:w-[36vw] md:h-[300px] w-[40vw] overflow-hidden group relative cursor-pointer  items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="xl:h-[230px] xl:w-[230px] w-[40vw] lg:w-[20.5vw] md:w-[36vw] md:h-[300px] h-[240px]">
                <img className="object-cover object-top w-full h-full overflow-hidden transition-transform duration-500 " src={imgsrc} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-sm font-bold text-white capitalize font-dmserif">{text}</h1>
                <div className="flex flex-row gap-5 my-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    
                    <Link to="https://www.linkedin.com/">
                     <CiLinkedin size={30} color="white"/>
                    </Link>
                    <Link to="https://www.facebook.com/">
                    <CiFacebook  size={30} color="white"/>
                    </Link>
                    <Link to="https://www.instagram.com/?hl=en">
                    <FaInstagram  size={30} color="white"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InstructorCard