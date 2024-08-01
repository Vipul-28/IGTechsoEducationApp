import { Link } from "react-router-dom";

const GroupComponent = () => {
  return (
    <div
    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
      className={`self-stretch bg-white flex flex-col items-center justify-start py-[49.9px] px-5 box-border gap-[60.2px] max-w-full text-left text-xl-7 text-darkslategray-200 font-roboto-slab mq450:pt-8 mq450:pb-8 mq450:box-border mq800:gap-[15px] mq1350:gap-[30px]`}
    >
      <div className="w-[1440px] h-[360px] relative bg-white hidden max-w-full" />
      <div className="w-[1130px] flex flex-row flex-wrap items-start justify-start gap-[47px] max-w-full mq800:gap-[23px]">
        <div className="flex flex-col items-start justify-start px-0 pt-2 pb-0">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[0.9px]">
              <div className="relative flex flex-row items-start justify-start">
                <img
                  className="h-[30.4px] w-[37.9px] absolute !m-[0] top-[-8px] right-[-12.2px] z-[1]"
                  alt=""
                  src="/group-1.svg"
                />
                <div className="h-[44.1px] relative leading-[24px] lowercase font-semibold inline-block shrink-0 z-[2] mq450:text-mid mq450:leading-[19px]">
                  <p className="m-0">smart</p>
                  <p className="m-0">academy</p>
                </div>
              </div>
              <div className="relative text-2xs capitalize font-light font-text-md-medium text-black inline-block min-w-[85px] shrink-0 z-[1]">
                grow your skills
              </div>
            </div>
            <div className="relative text-xs capitalize font-text-md-medium z-[1]">
              <p className="m-0">Learn from the best instructors</p>
              <p className="m-0">to gain insights, master skills,</p>
              <p className="m-0">and excel in your endeavors.</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-between min-w-[582px] max-w-full gap-[20px] z-[1] text-xs text-darkslategray-100 font-text-md-medium mq800:flex-wrap mq800:min-w-full">
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-col items-start justify-start">
              <b className="relative leading-[100%] inline-block min-w-[56px]">
                Products
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[100%] inline-block min-w-[49px]">
                Catalog
              </div>
              <div className="relative leading-[100%] inline-block min-w-[84px]">
                Prepaid cards
              </div>
              <div className="relative leading-[100%] inline-block min-w-[59px]">
                Gift cards
              </div>
              <div className="relative leading-[100%] inline-block min-w-[40px]">
                Money
              </div>
              <div className="relative leading-[100%] inline-block min-w-[44px]">
                Charity
              </div>
              <div className="relative leading-[100%]">
                Amazon.com gift cards
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-col items-start justify-start">
              <b className="relative leading-[100%] inline-block min-w-[58px]">
                Solutions
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[100%] inline-block min-w-[89px]">
                For developers
              </div>
              <div className="relative leading-[100%] inline-block min-w-[55px]">
                For Sales
              </div>
              <div className="relative leading-[100%] whitespace-nowrap">
                For research professionals
              </div>
              <div className="relative leading-[100%]">For human resources</div>
              <div className="relative leading-[100%] inline-block min-w-[113px]">
                For UX researchers
              </div>
              <div className="relative leading-[100%]">
                For market reaerchers
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-col items-start justify-start">
              <b className="relative leading-[100%] inline-block min-w-[65px]">
                Resources
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[100%] inline-block min-w-[42px]">
                Pricing
              </div>
              <div className="relative leading-[100%] inline-block min-w-[27px]">
                Blog
              </div>
              <div className="relative leading-[100%] inline-block min-w-[78px]">
                Case studies
              </div>
              <div className="relative leading-[100%] inline-block min-w-[69px]">
                Help center
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-col items-start justify-start">
              <b className="relative leading-[100%] inline-block min-w-[70px]">
                Developers
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[100%] inline-block min-w-[19px]">
                API
              </div>
              <div className="relative leading-[100%] inline-block min-w-[38px]">
                Status
              </div>
              <div className="relative leading-[100%] inline-block min-w-[94px]">
                Documentation
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-col items-start justify-start">
              <b className="relative leading-[100%] inline-block min-w-[62px]">
                Company
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[100%] inline-block min-w-[54px]">
                About Us
              </div>
              <div className="relative leading-[100%] inline-block min-w-[41px]">
                History
              </div>
              <div className="relative leading-[100%] inline-block min-w-[48px]">
                VC-free
              </div>
              <div className="relative leading-[100%] inline-block min-w-[32px]">
                News
              </div>
              <div className="relative leading-[100%] inline-block min-w-[48px]">
                Careers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1130px] flex flex-col items-start justify-start gap-[20px] max-w-full z-[1] text-xs text-darkslategray-100 font-text-md-medium">
        <div className="box-border flex flex-col items-center self-stretch justify-start h-0 px-0 pt-0 pb-0">
          <div className="self-stretch h-px relative box-border opacity-[0.2] border-t-[1px] border-solid border-darkslategray-100" />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq800:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[15.8px] max-w-full mq450:flex-wrap">
            <div className="relative leading-[100%]">
              © 2024 smartacademy.Ltd.
            </div>
            <div className="relative leading-[100%] font-semibold inline-block min-w-[39px]">
              Terms
            </div>
            <div className="relative leading-[100%] font-semibold inline-block min-w-[46px]">
              Privacy
            </div>
            <div className="relative leading-[100%] font-semibold inline-block min-w-[50px]">
              Security
            </div>
            <div className="relative leading-[100%] font-semibold inline-block min-w-[50px]">
              Cookies
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[28px]">
            <Link to="https://www.youtube.com/" >
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/youtube.svg"
            
            />
              </Link>
              <Link to="https://www.facebook.com/">
            <img
              className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
              alt=""
              src="/facebook.svg"
            />  
              </Link>
              <Link to="https://www.instagram.com/?hl=en">
            <img
              className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
              alt=""
              src="/instagram.svg"
            />  
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
