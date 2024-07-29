import GroupComponent2 from "./GroupComponent2";

const FrameComponent3 = () => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-60px] text-left text-mini text-darkslategray-200 font-text-md-medium `}
      data-aos="zoom-out-left"
   >
      <div className="w-[1129px] flex flex-row flex-wrap items-start justify-center gap-[43px] max-w-full z-[1] mq800:gap-[21px]">
        <GroupComponent2
          group87="/group-87.svg"
          k="50k+"
          onlineCourses="online courses"
        />
        <GroupComponent2
          group87="/group-88.svg"
          k="12k+"
          onlineCourses="expert tutors"
          propFlex="1"
          propMinWidth="162px"
        />
        <GroupComponent2
          group87="/group-89.svg"
          k="10K+"
          onlineCourses="certified courses"
          propFlex="unset"
          propMinWidth="unset"
        />
        <div className="flex-1 shadow-[0px_4px_10px_rgba(151,_151,_151,_0.2)] rounded-xl bg-white flex flex-row items-start justify-start py-6 px-4 box-border gap-[14px] min-w-[162px]">
          <div className="h-[120px] w-[250px] relative shadow-[0px_4px_10px_rgba(151,_151,_151,_0.2)] rounded-xl bg-white hidden" />
          <img
            className="h-[72px] w-[72px] relative z-[1]"
            alt=""
            src="/group-90.svg" 
          />
          <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
            <div className="relative capitalize z-[1]">
              <p className="m-0 font-semibold">150k+</p>
              <p className="m-0 font-medium">students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FrameComponent3;
