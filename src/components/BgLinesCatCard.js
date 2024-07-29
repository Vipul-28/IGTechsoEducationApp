import React from 'react'

const BgLinesCatCard = ({ imgsrc, SVG, title }) => {
    return (
        <div className="lg:w-[190px] xl:w-[250px] xl:h-[140px] md:w-[28vw] w-[40vw] h-[120px] md:h-[140px] bg-center rounded-3xl overflow-hidden group relative cursor-pointer items-center justify-center">
            <div className="lg:w-[190px] xl:w-[250px] xl:h-[140px] md:w-[28vw] w-[40vw] h-[120px] md:h-[140px]">
                <img className="object-cover w-full h-full overflow-hidden transition-transform duration-500 " src={imgsrc} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-2    text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-[15px] font-medium text-white capitalize font-Poppins">{title}</h1>
                <div className="flex flex-row gap-5 my-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {SVG}
                    <p className='text-[15px] text-slate-100 font-poppins'>200+ Courses</p>
                </div>
            </div>
        </div>
    )
}

export default BgLinesCatCard