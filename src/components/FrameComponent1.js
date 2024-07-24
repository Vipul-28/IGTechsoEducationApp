
const FrameComponent1 = () => {
  return (
    <div
      className={`self-stretch bg-gray1-100 flex flex-col items-start justify-start py-[70px] px-[155px] box-border gap-[40px] max-w-full text-left text-5xl text-white font-futura mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[20px] mq800:py-[45px] mq800:px-[77px] mq800:box-border`}
    >
      <div className="w-[1440px] h-[510px] relative bg-gray1-100 hidden max-w-full" />
      <div className="w-[723.2px] flex flex-col items-start justify-start gap-[4px] max-w-full">
        <b className="w-96 relative leading-[24px] capitalize inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[19px]">
          learn from the best instructors
        </b>
        <div className="self-stretch relative text-mini capitalize font-text-md-medium z-[1]">
          Learn from the best instructors to gain insights, master skills, and
          excel in your endeavors. Their expertise accelerates your progress.
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start gap-[35px] grid-cols-[repeat(4,_minmax(192px,_1fr))] z-[1] text-xs font-inter mq800:gap-[17px] mq800:grid-cols-[minmax(192px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(192px,_333px))]">
        <div className="h-64 flex flex-row items-end justify-center py-[19px] pr-5 pl-[21px] box-border relative">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/profile-photo@2x.png"
          />
          <div className="relative capitalize font-semibold inline-block min-w-[88px] z-[1]">
            Michael Knight
          </div>
        </div>
        <div className="h-64 flex flex-row items-end justify-center py-[19px] pr-5 pl-[21px] box-border relative">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-82@2x.png"
          />
          <div className="relative capitalize font-semibold inline-block min-w-[69px] z-[1]">
            Tony Danza
          </div>
        </div>
        <div className="h-64 flex flex-row items-end justify-center py-[19px] pr-5 pl-[21px] box-border relative">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-83@2x.png"
          />
          <div className="relative capitalize font-semibold inline-block min-w-[68px] z-[1]">
            Rick Wright
          </div>
        </div>
        <div className="h-64 flex flex-row items-end justify-center py-[19px] pr-5 pl-[21px] box-border relative">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-84@2x.png"
          />
          <div className="relative capitalize font-semibold inline-block min-w-[72px] z-[1]">
            Kate Tanner
          </div>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent1;
