import BigLines from "../components/Home/BigLines";
import FrameComponent5 from "../components/Home/FrameComponent5";
import FrameComponent4 from "../components/Home/FrameComponent4";
import FrameComponent3 from "../components/Home/FrameComponent3";
import FrameComponent2 from "../components/Home/FrameComponent2";
import FrameComponent1 from "../components/Home/FrameComponent1";
import GroupComponent1 from "../components/Home/GroupComponent1";
import FrameComponent from "../components/Home/FrameComponent";
import GroupComponent from "../components/Home/GroupComponent";
import FrameSideNav from "../utils/FrameSideNav";
import BgLines1 from "../components/Home/BgLines1";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"
const HomePage = () => {
  useEffect(()=>
  {
    Aos.init({
      duration:1800,offset:100,
    });
  },[])

  return (
    <div className="overflow-hidden">
      <FrameComponent5   />
    <div className="max-w-full m-auto"  >
      <div className="w-full">

        
      </div>
      <img
        className="w-[347.3px] relative rounded-[50%] max-h-full object-contain hidden max-w-full z-[2]"
        alt=""
        src="/ellipse-3@2x.png"
      />
      <div className="m-y-0 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[132.5px] box-border gap-[100px] max-w-full  mq800:gap-[50px] mq800:pb-[300px] mq800:box-border  mq1125:box-border mq1350:box-border ">
        <div className="flex flex-col items-start self-stretch max-w-full ">
          <FrameComponent4 />
          <FrameComponent3 />
        </div> 
      </div>
          

  <BigLines />    
<div className="my-20">
<BgLines1 />
</div>













 
             <FrameComponent2 />
             <div className="bg-[#1C1C1C] ">
      <FrameComponent1 />
             </div>
<div className="w-screen [background:linear-gradient(180deg,_#9c79b3_48.52%,_#8a61a5_75.96%)]">
  
        <GroupComponent1 />
</div>
      <div className="self-stretch flex flex-col  items-center justify-center pt-0 px-0 pb-[100px] box-border gap-[100px] max-w-full mq450:gap-[25px] mq800:gap-[50px] mq800:pb-[65px] mq800:box-border">
        <FrameComponent />
      </div>
      <GroupComponent />
      {/* <FrameSideNav /> */}
    </div>
    </div>

  );
};

export default HomePage;
