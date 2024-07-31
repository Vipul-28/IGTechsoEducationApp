import React from 'react'
import Arrow from '../utils/Arrow'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input,Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import "./contact.css"
const GroupComponent1 = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div 
        data-aos="zoom-out-up"
        className='achieve co:container  overflow-hidden relative md:h-[250px]  [background:linear-gradient(180deg,_#9c79b3_48.52%,_#8a61a5_75.96%)]  '>
            <Arrow className={"lg:top-19 lg:left-0  md:top-16 md:-left-14 hidden md:block"} />
            
            <div className='relative flex flex-col md:flex-row font-poppins'>
                <div className='pt-5 px-[30px] xl:px-[155px] md:z-20'>
                    <h3 className='my-2 text-xl font-medium leading-loose mt-[-8px] text-white capitalize md:text-2xl'>
                        achieve your goal with
                        <p className='text-lg capitalize lg:text-xl mt-[-10px]'>smart academy</p>
                    </h3>
                    <p className='text-xs leading-5 text-white capitalize'>Lorem Ipsum is simply dummy text of the printing and type setting industry.<br className='hidden md:block' />
                        Lorem Ipsum has been the industry's standard dummy
                        <br className='hidden md:block' />
                        text ever since the 1500s. </p>
                        <button className='rounded-lg animate-bounce bg-[#8708C2] px-5 py-1 text-white text-sm font-medium mb-[0.8rem] mt-5' onClick={onOpen}>Register here</button>
                </div>

                <div  className='md:right-0 md:w-[350px] md:h-[280px] lg:w-[420px] lg:h-[250px] lg:mr-[80px] w-full h-full static md:absolute right-20 overflow-hidden'>
                    <img className='object-cover w-full h-full scale-125' src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*H8yObZQrXeVOMv3RE41Hiw.jpeg" alt="" />
                </div>
            </div>
            <div className='h-[43px] w-full md:block hidden z-10 bg-[#9C79B3]'></div>
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
                  label="Name"
                  placeholder="Enter your Name"
                  type="text"
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
                <Input
                  endContent={
                    <LockIcon className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
                  }
                  label="Confirm Password"
                  placeholder="Enter your Confirm password"
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
        </div>
    )
}

export default GroupComponent1