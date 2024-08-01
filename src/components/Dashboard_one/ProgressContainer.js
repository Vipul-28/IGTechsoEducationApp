import GroupComponent11 from "./GroupComponent3";

const ProgressContainer = () => {
  return (
    <div
      className={`w-[1036px] flex flex-row items-start justify-start pt-0 pb-2 pr-5 pl-0 box-border max-w-full text-left text-xs text-midnightblue font-text-md-medium`}
    >
      <div className="flex-1 flex flex-row items-start justify-center gap-[32px] max-w-full mq800:gap-[16px] mq1125:flex-wrap">
        <GroupComponent11
          group28="/dashboard/group-28.svg"
          courseInProgress="course in progress"
          toDoContainer="04"
        />
        <GroupComponent11
          group28="/dashboard/group-31.svg"
          courseInProgress="completed course"
          toDoContainer="34"
          propBackgroundColor="#ffe6ed"
        />
        <GroupComponent11
          group28="/dashboard/group-30.svg"
          courseInProgress="certificates earned"
          toDoContainer="30"
          propBackgroundColor="#daecff"
        />
        <div className="flex-1 rounded-sm bg-lavender-600 flex flex-col items-start justify-start pt-2.5 px-4 pb-[30px] box-border gap-[27.5px] min-w-[212px] max-w-[230px]">
          <div className="w-[230px] h-[150px] relative rounded-sm bg-lavender-600 hidden" />
          <div className="flex flex-row items-start justify-start gap-[9px]">
            <img
              className="h-8 w-8 relative z-[1]"
              loading="lazy"
              alt=""
              src="/dashboard/group-29.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <div className="relative leading-[18.4px] capitalize font-medium inline-block min-w-[58px] z-[1]">
                to do list
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4.5px] text-9xl">
            <div className="relative capitalize z-[1]">
              <span className="font-medium">{`02 `}</span>
              <span className="text-base font-light">remaining tasks</span>
            </div>
            <div className="self-stretch h-[3px] relative [background:linear-gradient(90deg,_#8708c2_58.1%,_#fff_58.17%)] z-[1]" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProgressContainer;
