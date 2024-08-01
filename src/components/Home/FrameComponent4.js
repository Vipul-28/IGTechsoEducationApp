import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input,Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import { useState } from "react";

const FrameComponent4 = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [ani,setAni]=useState(false);
  return (
    <div
      className={`grid grid-flow-col justify-items-start`}
      data-aos="zoom-in-right"
    >
      {/* <img
        className="h-[360.9px] w-[261.3px] absolute !m-[0] right-[-100px] bottom-[97.9px] object-contain z-[7]"
        alt=""
        src="/vector-7.svg"
      />
      <img
        className="h-[309.1px] w-[211.6px] absolute !m-[0] top-[-7.2px] left-[-109.1px] object-contain z-[2]"
        alt=""
        src="/vector-8.svg"
      /> */}
      <div className="grid grid-flow-col w-screen mt-24 justify-items-center  [background:linear-gradient(244.25deg,_#ffeddf,_#e3e2fc)]  pt-[57.9px]  pb-[158.1px] box-border relative   mq450:box-border     mq800:box-border  mq1350:box-border">
        <div className="relative [background:linear-gradient(244.25deg,_#ffeddf,_#e3e2fc)] hidden max-w-full z-[0]" />
     
     
        <div className=" flex flex-col absolute items-start justify-start pt-[454.2px] pb-0 pr-[7px] pl-0 mq800:pt-[295px]   mq800:box-border">
          <img
            className="w-[35.5px] h-[38px] relative z-[1]"
            alt=""
            src="/group-61.svg"
          />
        </div>
       
       
        <img
          className="h-[43.5px] w-[40.7px] absolute !m-[0] top-[59.5px] left-[90.7px] z-[1]"
          alt=""
          src="/group-58.svg"
        />
        
        
        
         <div className="box-border grid grid-flow-col px-0 pb-0 justify-items-end shrink-0 mq450:justify-items-center mq900:grid-flow-row ">
          <div className="self-stretch flex flex-col items-start justify-start mq800:ml-10     gap-[20.7px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[5.6px]">
                <b className="relative lowercase z-[1] font-fuzzy-bubbles">
                  100% satisfaction guarantee
                </b>
                <b className="relative text-41xl leading-[80px] capitalize font-futura text-darkslategray-200 z-[1] mq450:text-17xl mq450:leading-[48px] mq800:text-29xl mq800:leading-[64px]">
                  <p className="m-0">learn skills from</p>
                  <p className="m-0">our top instructors</p>
                </b>
              </div>
              <div className="relative text-lg leading-[30px] font-text-md-medium text-dimgray inline-block max-w-full z-[1] font-Poppins">
                <p className="m-0">
                  <span className="capitalize">{`Enhance `}</span>
                  <span className="lowercase">
                   your skills with guidance from our premier instructors.
                  </span>
                </p>
                <p className="m-0 lowercase">
                  Our website offers a unique opportunity to learn from
                </p>
                <p className="m-0 lowercase">
                  the best, gaining expertise in various fields.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[25px] max-w-full text-mini text-white font-text-md-medium">
              <div className="flex flex-row items-start justify-start gap-[32px] font-futura mq450:flex-wrap">
                <div className="rounded-sm bg-darkviolet flex flex-row items-start justify-start py-[14.5px] px-[25px] whitespace-nowrap z-[1]" onClick={onOpen}>
                  <div className="h-11 w-[150px] relative rounded-sm bg-darkviolet hidden" />
                  <b className="relative leading-[15px] capitalize inline-block min-w-[99px] z-[1]" onClick={onOpen}>
                    sign up now
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-lg text-darkviolet font-text-md-medium">
                  <div className="flex flex-row items-start justify-start gap-[5px]">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/video-1-traced1.svg"
                        onClick={() => setAni(!ani)}
                      />
                    </div>
                    <div className="relative leading-[30px] capitalize font-Poppins font-light inline-block min-w-[115px] z-[1]">
                      how it works
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-base capitalize text-dimgray font-poppins z-[1]">
                <p className="m-0">trusted by over 5 million+ students</p>
                <p className="m-0">worldwide since 2003</p>
              </div>
              <div className="flex flex-row items-start justify-start gap-[15px] z-[1] text-darkslategray-200">
                <div className="h-[23px] relative capitalize font-semibold inline-block ">
                  500k+ reviews
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <b className="relative capitalize inline-block min-w-[25px]">
                    4.5
                  </b>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="self-stretch w-[10.2px] relative max-h-full min-h-[20px]"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-row justify-items- mq900:mt-10">
    <img
      className="relative z-10 w-10 h-10"
      alt=""
      src="/group-56.svg"
    />
    <img
    // {
    //   ani?
    //   className={`relative max-w-full left-10 mq900:pr-[70px] mq900:left-0 mq550:pr-0`}
    //   :
    //   className={`relative max-w-full left-10 mq900:pr-[70px] mq900:left-0 mq550:pr-0`}

    // }
    className={`relative max-w-full left-10 mq900:pr-[70px] mq900:left-0 mq550:pr-0 animate-none ${ani && 'animate-pulse'}`}

    src="/group-54.png"
    alt=""
    // data-aos="zoom-out-up"
  />
         </div>
        </div>
          {/* <div className="flex flex-col items-start justify-start gap-8 px-4 text-center text-white sm:hidden text-lgi-3 font-text-md-medium "> */}
  
  {/* The commented-out section */}
 
{/* </div> */}

      </div>
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
  );
};
export default FrameComponent4;
