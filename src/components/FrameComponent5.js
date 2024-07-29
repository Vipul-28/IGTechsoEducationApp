import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import SearchButton from "../utils/SearchButton";
import CategoriesButton from "../utils/CategoriesButton";
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';

const FrameComponent5=()=>{
    const [toggle, setToggle] = useState(false);
    let [count, setCount] = useState(0);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const changeCount=()=>{
    setCount(count+1)
  }
    const Toggle = () => {
        setToggle(!toggle);
    };
    return (
        <>
            <nav className="relative"  >
                <div className="flex w-svw z-40 bg-white  fixed flex-row  justify-between xl:px-[150px] items-center py-2 px-[30px]">
                    <div>
                        <Link href={"/"}>
                        <div>
            <span className='flex font-serif text-xs md:text-lg items-center font-[600]'>smart<span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="26" viewBox="0 0 38 31" fill="none">
                <path d="M16.7077 4.08381V12.9127L26.8639 7.04782C26.7696 6.98097 26.6753 6.91783 26.5735 6.8584L15.795 0.729797C15.2987 0.447118 14.7354 0.298279 14.1621 0.298279C13.5887 0.298279 13.0255 0.447118 12.5291 0.729797L1.75066 6.8584C1.25442 7.14101 0.842324 7.54713 0.555714 8.03607C0.269103 8.525 0.118043 9.07956 0.117676 9.64412V13.3399L16.7077 4.08381Z" fill="#220F60" />
                <path d="M9.91919 24.2334V15.5034L0.11377 20.7917V21.6432C0.114137 22.1892 0.26522 22.7256 0.551831 23.1985C0.838441 23.6714 1.25051 24.0643 1.74676 24.3376L12.5252 30.2654C13.0215 30.5388 13.5848 30.6828 14.1582 30.6828C14.7315 30.6828 15.2948 30.5388 15.7911 30.2654L26.5696 24.3376C27.0658 24.0643 27.4779 23.6714 27.7645 23.1985C28.0511 22.7256 28.2022 22.1892 28.2025 21.6432V14.0233L9.91919 24.2334Z" fill="#FC2262" />
                <path d="M37.9548 6.07431C37.9552 6.48089 37.8722 6.88358 37.7104 7.25935C37.5486 7.63512 37.3111 7.9766 37.0117 8.26427C36.7122 8.55193 36.3566 8.78014 35.9651 8.93584C35.5736 9.09154 35.154 9.17169 34.7303 9.17169C34.1912 9.17881 33.6591 9.05429 33.184 8.80984L11.7931 20.8773V12.1243L0.102051 18.4747V15.1638L14.8102 7.17431V15.826L31.5435 6.37825C31.5378 6.27701 31.5378 6.17555 31.5435 6.07431C31.5435 5.25283 31.8836 4.465 32.489 3.88413C33.0945 3.30326 33.9156 2.97693 34.7718 2.97693C35.6279 2.97693 36.4491 3.30326 37.0545 3.88413C37.6599 4.465 38 5.25283 38 6.07431H37.9548Z" fill="#8708C2" />
            </svg></span>
            </span>
            <h3 className='mt-[-4px] font-serif text-xs md:text-lg items-center font-[600]'>academy</h3>
            <p className='text-[6px] md:text-[9px] '>Grow Your Skills</p>
        </div>
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                    <div className="self-stretch h-[11px] relative">
          <div className="absolute top-[0px] left-[0px] leading-[24px] font-semibold inline-block min-w-[48px] z-[1]">
            home
          </div>
          <div className="absolute top-[0px] left-[77px] leading-[24px] font-semibold inline-block min-w-[69px] z-[1]">
            courses
          </div>
          <div className="absolute top-[0px] left-[178px] leading-[24px] font-semibold inline-block min-w-[42px] z-[1]">
            shop
          </div>
          <div className="absolute top-[0px] left-[252px] leading-[24px] font-semibold inline-block min-w-[49px] z-[1]">
            blogs
          </div>
        </div>
                    </div>

                    <div className="flex flex-row gap-5 lg:mr-[170px] mr-[33px]">
                      {/* <SearchButton className="absolute ml-10" /> */}
                      <div className="lg:flex hidden flex-row items-center gap-2 border-2 mx-2 text-xs text-purple-700 font-[600] uppercase border-purple-500 rounded-xl bg-transparent px-5 py-2">
      <input className='lg:flex hidden flex-row items-center gap-2 border-2 mx-2 text-xs text-purple-700 font-[600] uppercase border-none rounded-xl bg-transparent     px-5 py-2' />
    </div> 
                        <button className='bg-[#F5E1FF] lg:flex hidden flex-row items-center font-[600] border-2 border-transparent gap-2 text-[#8708C2] text-xs rounded-lg px-5 py-2' onClick={changeCount}><CategoriesButton  /> Categories</button>
                        <div className="relative lg:block ">
                            <button className='bg-[#FAEFFF] rounded-lg p-2'><IoCartOutline size={30} /></button>
                            <p className="md:w-5 md:h-5 w-4 h-4 -top-8 -right-4 text-[#8708C2]  absolute md:px-[6px] md:py-[3px] px-[1px] text-xl font-bold rounded-full">{count}</p>
                        </div>
                        <button className='bg-[#8708C2] text-sm uppercase text-white px-3 py-2 md:px-5 md:py-3 font-medium rounded-[11px] ' 
    onClick={onOpen}  >Login</button>
                            {toggle ? <MdOutlineClose size={20} onClick={Toggle} /> : <IoIosMenu size={20} onClick={Toggle} className="hidden mt-2 mq1000:block" />}
                    </div>
                </div>
            </nav>
            {toggle && (
              
                    <div className="fixed bg-white w-screen top-[70px] z-10 h-screen">
                        <div className="block lg:hidden">
                        <div className="self-stretch h-[11px] relative grid">
          <div className="absolute top-[0px] left-[0px] leading-[24px] font-semibold inline-block min-w-[48px] z-[1]">
            home
          </div>
          <div className="absolute top-[0px] left-[77px] leading-[24px] font-semibold inline-block min-w-[69px] z-[1]">
            courses
          </div>
          <div className="absolute top-[0px] left-[178px] leading-[24px] font-semibold inline-block min-w-[42px] z-[1]">
            shop
          </div>
          <div className="absolute top-[0px] left-[252px] leading-[24px] font-semibold inline-block min-w-[49px] z-[1]">
            blogs
          </div>
        </div>
                        </div>

                        <div className="flex-col block my-2 lg:hidden">
                            <button className='flex flex-row items-center gap-2 border-2 text-xs text-purple-700 font-[600] uppercase border-purple-500 my-3 rounded-xl bg-transparent px-5 py-2'><SearchButton /> Search for course</button>

                            <button className='bg-[#F5E1FF] flex flex-row items-center font-[600] border-2 border-transparent gap-2 my-3 text-[#8708C2] text-xs rounded-lg px-5 py-2' onClick={changeCount}><CategoriesButton /> Categories</button>
                        </div>
                    </div >
            )
            }
           <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex justify-between px-1 py-2">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose} className="bg-[#8708C2]">
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

        </>
    );
}

export default FrameComponent5;

