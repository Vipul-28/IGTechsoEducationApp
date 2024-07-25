import FrameSideNav from "../utils/FrameSideNav";

const FrameComponent5 = () => {
  return (
    <>
    <div className="">
      
    <div
      className={`flex flex-row items-start justify-start pt-8 pb-[25px] pr-[154px] pl-[155px] box-border relative gap-[60.1px] max-w-full text-left text-xl-7 text-darkslategray-200 font-montserrat mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap   mq800:box-border `}
      >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray1-200" />
      <div className="flex flex-col items-start justify-start py-0 pr-[43px] pl-0 gap-[0.9px] font-roboto-slab">
        <div className="relative flex flex-row items-start justify-start">
          <img
            className="h-[30.4px] w-[37.9px]  !m-[0] top-[-8px] right-[-12.2px] z-[1]"
            alt=""
            src="/group-1.svg"
          />
          <div className="h-[44.1px] relative leading-[24px] lowercase font-semibold inline-block z-[2]">
            <p className="m-0">smart</p>
            <p className="m-0">academy</p>
          </div>
        </div>
        <div className="mq1125:hidden relative text-2xs capitalize font-light font-text-md-medium text-black inline-block min-w-[85px] z-[1]">
          grow your skills
        </div>
      </div>
      <div className="mq1125:hidden w-[310.9px] flex flex-col items-start justify-start pt-[21.5px] pb-0 pr-[9px] pl-0 box-border text-base">
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
      <div className="mq1125:hidden w-[367px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full text-sm text-darkviolet">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
          <div className="flex-1 rounded-xl box-border flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] min-w-[140px] z-[1] border-[1px] border-solid border-darkviolet">
            <div className="h-11 w-[215px] relative rounded-xl box-border hidden border-[1px] border-solid border-darkviolet" />
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/search.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="h-2.5 relative leading-[24px]   mt-[-7.5px] font-semibold inline-block z-[1]">
                search for course
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-lavender-100 flex flex-row items-start justify-start py-3 px-4 gap-[8px] z-[1]">
            <div className="h-11 w-[140px] relative rounded-xl bg-lavender-100 hidden" />
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/category.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="h-2.5 relative leading-[24px] mt-[-7.5px] font-semibold inline-block min-w-[80px] z-[1]">
                categories
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mq1125:hidden flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0 text-xs text-white">
        <div className="flex flex-row items-start justify-start gap-[19px]">
          <div className="relative w-4 h-4">
            <div className="absolute top-[5px] left-[0px]  rounded-[50%] bg-darkviolet w-full h-full z-[2]" />
            <div className="absolute top-[3.9px] left-[3.5px] flex flex-row items-start justify-start">
              <img
                className="h-[43.9px] w-11 absolute !m-[0] bottom-[-39.9px] left-[-39.5px] z-[1]"
                alt=""
                src="/group-4.svg"
              />
              <div className="h-2 relative font-semibold inline-block min-w-[12px] z-[3]">
                0
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[3.9px] px-0 pb-0 text-base">
            <div className="rounded-xl bg-darkviolet flex flex-row items-start justify-start pt-[16.5px] px-7 pb-[16.4px] z-[1]">
              <div className="h-[43.9px] w-[102px] relative rounded-xl bg-darkviolet hidden" />
              <div className="relative leading-[11px] font-semibold inline-block min-w-[46px] z-[1]">
                login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>

  );
};


export default FrameComponent5;
