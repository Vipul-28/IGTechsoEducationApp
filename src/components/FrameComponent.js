
const FrameComponent = () => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-darkslategray-200 font-text-md-medium `}
    >
      <div className="w-[1140px] flex flex-row flex-wrap items-start justify-start gap-[27.1px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15.9px] min-w-[424px] max-w-full mq800:min-w-full">
          <b className="self-stretch relative tracking-[-0.02em] leading-[44px] shrink-0 mq450:text-3xl mq450:leading-[26px] mq800:text-10xl mq800:leading-[35px]">
            Sign up for our newsletter
          </b>
          <div className="relative text-xl leading-[30px] font-medium text-dimgray inline-block shrink-0 max-w-full mq450:text-base mq450:leading-[24px]">
            Stay in the loop with everything you need to know.
          </div>
        </div>
        <div className="w-[461px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full text-base text-gray-800">
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[7.9px] min-w-[208px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                  <div className="w-40 relative leading-[24px] font-medium hidden shrink-0">
                    Email
                  </div>
                  <div className="flex-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-[9px] px-[13px] text-gray-5001 border-[1px] border-solid border-gray-200">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                        alt=""
                        src="/message--24--outline.svg"
                      />
                      <div className="flex-1 relative leading-[24px]">
                        Enter your email
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-40 relative text-sm leading-[20px] text-gray-500 hidden">
                  Hint text goes here.
                </div>
              </div>
              <div className="self-stretch relative text-xs leading-[18px] font-medium text-gray-500">
                <span>{`We care about your data in our `}</span>
                <span className="text-darkviolet">privacy policy</span>
              </div>
            </div>
            <div className="shadow-[0px_1px_2px_rgba(105,_81,_255,_0.05)] rounded-md bg-darkviolet overflow-hidden flex flex-row items-start justify-start py-[11px] px-[18px] gap-[8px] text-primary-050">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                alt=""
                src="/message--24--outline1.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[81px]">
                Subscribe
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                alt=""
                src="/right-arrow--24--outline.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrameComponent;
