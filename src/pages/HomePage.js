import BigLines from "../components/BigLines";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";

const HomePage = () => {
  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-end justify-start pt-[0.3px] px-0 pb-[0.1px] box-border  text-left text-5xl text-black font-futura">
      <FrameComponent5 />
      <img
        className="w-[347.3px] relative rounded-[50%] max-h-full object-contain hidden max-w-full z-[2]"
        alt=""
        src="/ellipse-3@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[1092.5px] box-border gap-[100px] max-w-full mq450:gap-[25px] mq800:gap-[50px] mq800:pb-[300px] mq800:box-border mq1125:pb-[461px] mq1125:box-border mq1350:pb-[710px] mq1350:box-border   w-screen">
        <div className="flex flex-col items-start self-stretch justify-start max-w-full">
          <FrameComponent4 />
          <FrameComponent3 />
        </div>
        <div className="w-[1033.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[723.2px] flex flex-col items-start justify-start gap-[4px] max-w-full">
            <b className="relative  capitalize mq450:text-lgi mq450:leading-[19px]">
              our top category
            </b>
            <div className="self-stretch relative text-mini capitalize font-text-md-medium text-dimgray z-[4]">
              Explore global experts who are leading in their fields, offering
              unparalleled knowledge and guidance as top instructors from every
              corner of the world.
            </div>
          </div>
      <BigLines />
        </div>
      </div>
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[100px] box-border gap-[100px] max-w-full mq450:gap-[25px] mq800:gap-[50px] mq800:pb-[65px] mq800:box-border">
        <GroupComponent1 />
        <FrameComponent />
      </div>
      <GroupComponent />
    </div>
  );
};

export default HomePage;
