import React from 'react'
import Rectangle from '../../utils/Rectangle'
import Person from '../../utils/Person'
import Diamond from '../../utils/Diamond'
import Book from '../../utils/Book'
import Student from '../../utils/Student'
import Videos from '../../utils/Video'
import "./contact.css"
import CollageImages from './Collageimages'
const BgLines1 = () => {
  return (
<div 
className="grid self-stretch grid-flow-col co:container justify-items-center mq1000:grid-flow-row"
     
> 


            <div data-aos="fade-right"
 className='relative md:px-40 mq1125:right-[100px] mq1250:right-[100px] mq1000:right-0'
 >
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
                    <button className='bg-[#8708C2] text-white py-2 w-[130px] rounded-[25px] font-medium text-sm hover:animate-bounce' >Explore More</button>
                </div>
            </div>
            <CollageImages />
</div>

  )
}

export default BgLines1