import React from 'react'
import Rectangle from '../utils/Rectangle'
import Person from '../utils/Person'
import Diamond from '../utils/Diamond'
import Book from '../utils/Book'
import Student from '../utils/Student'
import Videos from '../utils/Video'

const BgLines1 = () => {
  return (
<div 
className="grid self-stretch grid-flow-col justify-items-center mq1000:grid-flow-row"
     
> 


            <div data-aos="fade-right"
 className='relative md:px-40 mq1125:right-[100px] mq1250:right-[100px] mq1000:right-0'>
                {/* <Rectangle className={"-top-10 -left-10"} /> */}
                <h3 className='my-2 text-sm font-bold text-purple-700'>
                    Get to know about us
                </h3>
                <b className="relative text-17xl leading-[48px] capitalize inline-block font-futura text-darkslategray-200 max-w-full z-[4] mq450:text-3xl mq450:leading-[29px] mq800:text-10xl mq800:leading-[38px]">
              <p className="m-0">discover top instructors</p>
              <p className="m-0">around the world</p>
            </b>
            <div className="relative text-mini capitalize font-text-md-medium text-dimgray z-[4]">
              <p className="m-0">
                Explore global experts who are leading in their fields, offering
              </p>
              <p className="m-0">unparalleled knowledge and guidance as top</p>
              <p className="m-0">instructors from every corner of the world.</p>
            </div>
                <div className='grid grid-cols-2 my-5'>

                    <div className='relative flex flex-row items-center'>
                        <Person />
                        <Diamond color={"#DBDBDB"} className={"-left-2 md:top-0 top-2 "} />
                        <div className='mx-5'>
                            <p className='font-bold'>12,500</p>
                            <p className='text-sm'>Expert Tutors</p>
                        </div>
                    </div>

                    <div className='relative flex flex-row items-center'>
                        <Book />
                        <Diamond color={"#F0B5CB"} className={"-left-2 md:top-0 top-2 "} />
                        <div className='mx-5'>
                            <p className='font-bold'>100k+</p>
                            <p className='text-sm'>Top Lessons</p>
                        </div>
                    </div>

                    <div className='relative flex flex-row items-center'>
                        <Student />
                        <Diamond color={"#96A5C3"} className={"-left-2 md:top-0 top-2 "} />
                        <div className='mx-5'>
                            <p className='font-bold'>56,556+</p>
                            <p className='text-sm'>Over Students</p>
                        </div>
                    </div>

                    <div className='relative flex flex-row items-center'>
                        <Videos />
                        <Diamond color={"#9AAEDF"} className={"-left-2 md:top-0 top-2 "} />
                        <div className='mx-5'>
                            <p className='font-bold'>23,890</p>
                            <p className='text-sm'>Pro Videos</p>
                        </div>
                    </div>
                    <button className='bg-[#8708C2] text-white py-2 w-[130px] rounded-[25px] font-medium text-sm'>Explore More</button>
                </div>
            </div>
<div data-aos="fade-left"
 className="relative flex flex-row items-start self-stretch justify-start contain-size w-[300px] h-[300px] mq1000:l-[100px] ">
 <div className="h-[129.6px] w-[1440px]  absolute !m-[0] right-[-70px] top-[-500px] mq1350:right-[-150px] mq1250:right-[-200px] mq1125:right-[-200px]   mq1000:right-[-420px] mq800:right-[-350px] mq550:right-[-400px] mq450:right-[-550px] ">
      {/* <div className="absolute top-[1034.16px] left-[685.9px] bg-lavenderblush-100 w-[1338.5px] h-[77.2px] [transform:_rotate(-50.6deg)] [transform-origin:0_0]" />
      <div className="absolute top-[1227.38px] left-[799.22px] bg-lavenderblush-200 w-[1338.5px] h-[77.2px] [transform:_rotate(-139.6deg)] [transform-origin:0_0] z-[1]" />
      <div className="absolute top-[1083.16px] left-[745.5px] bg-lavender-200 w-[1338.5px] h-[134.5px] [transform:_rotate(-50.6deg)] [transform-origin:0_0] z-[2]" /> */}
      <img
        className="absolute top-[924.6px] left-[695.3px] w-[36.2px] h-[38.5px] z-[4]"
        alt=""
        src="/group-63.svg"
      />
      <img
        className="absolute top-[475.5px] left-[708.2px] w-[132px] h-[144.9px] object-contain z-[4]"
        alt=""
        src="/group-66@2x.png"
      />
      
      <img
        className="absolute top-[535.7px] left-[764.1px] mq800:top-[535.7px] mq800:left-[664.1px] mq450:left-[600.1px] rounded-tl-[20.93px] rounded-tr-none rounded-b-none w-[170px] mq800:w-[100px] h-[138.7px] mq800:h-[100px] object-cover z-[5]"
        alt=""
        src="/rectangle-24@2x.png"
      />
      <img
        className="absolute top-[535.6px] left-[942.8px] w-[170px] mq800:w-[100px] mq800:top-[535.7px] mq450:left-[710.1px] mq800:left-[780.1px] h-[87.2px] mq800:h-[67px] object-cover z-[4]"
        alt=""
        src="/rectangle-25@2x.png"
      />
      <img
        className="absolute top-[858.2px] left-[1121.6px] mq450:left-[820.1px] mq800:top-[800.2px] mq800:left-[900.1px]  rounded-t-none rounded-br-[20.93px] rounded-bl-none w-[120.3px] mq800:w-[60px] h-[108.1px] mq800:h-[90px] object-cover z-[4]"
        alt=""
        src="/video--1080p---1--adobeexpress-1@2x.png"
      />
      <img
        className="absolute top-[631.5px] left-[942.8px] mq800:top-[631.7px] mq800:left-[780.1px] mq450:left-[710.1px] w-[170px] h-[218px] mq800:h-[160px] mq800:w-[100px] object-cover z-[4]"
        alt=""
        src="/rectangle-26@2x.png"
      />
      <img
        className="absolute top-[535.6px] left-[1121.6px] mq800:top-[535.7px] mq800:left-[900.1px] mq450:left-[820.1px] rounded-tl-none rounded-tr-[20.93px] rounded-b-none w-[120.3px] mq800:w-[60px] h-[113.4px] mq800:h-[90px] object-cover z-[4]"
        alt=""
        src="/rectangle-29@2x.png"
      />
      <img
        className="absolute top-[657.6px] left-[1121.6px] mq800:top-[641.6px] mq800:left-[900.1px] mq450:left-[820.1px] w-[120.3px] h-[191.8px] mq800:h-[150px] mq800:w-[60px] object-cover z-[4]"
        alt=""
        src="/rectangle-30@2x.png"
      />
      <img
        className="absolute top-[858.2px] left-[764.1px] mq800:top-[800.2px] mq800:left-[666.1px] mq450:left-[600.1px] rounded-t-none rounded-br-none rounded-bl-[20.93px] w-[348.8px] mq800:w-[215px] h-[108.1px] mq800:h-[90px] object-cover z-[4]"
        alt=""
        src="/701881379--1080p--adobeexpress-1@2x.png"
      />
      <img
        className="absolute top-[683.1px] left-[764.1px] mq800:top-[650.6px] mq800:left-[665.1px] mq450:left-[600.1px] w-[170px] h-[166.4px] mq800:h-[140px]  mq800:w-[100px] object-cover z-[4]"
        alt=""
        src="/video--1080p--adobeexpress-1@2x.png"
      />
      <img
        className="absolute top-[466px] left-[122.5px] w-[32.5px] h-[36.8px] mq800:w-[16.8px] z-[4]"
        alt=""
        src="/group-64.svg"
      />
      {/* <img
        className="absolute top-[961.7px] left-[1254.5px] w-[32.5px] h-[36.8px] mq800:w-[16.8px] z-[4]"
        alt=""
        src="/group-65.svg"
      /> */}
    </div>
 
<div/>
</div>
</div>

  )
}

export default BgLines1