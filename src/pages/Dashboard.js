import GroupComponent11 from "../components/Dashboard_one/GroupComponent11";
import ProgressContainer from "../components/Dashboard_one/ProgressContainer";
import PerformanceContainer from "../components/Dashboard_one/PerformanceContainer";
import ProgressBarChart from "../utils/ProgressBarChart";
import BarLineChart from "../utils/BarLineChart";
import { CiBellOn } from "react-icons/ci";
import { ArrowDownward } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <div className="w-full relative bg-white overflow-x-hidden flex flex-row   gap-[43px] leading-[normal] tracking-[normal] mq800:gap-[21px] mq1325:flex-wrap">
      <GroupComponent11 />
      <main className="w-[1067px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border max-w-full">
        <section className="self-stretch h-[959px] flex flex-col items-start justify-start pt-0 px-0 pb-[279px] box-border gap-[32px] max-w-full text-left text-9xl text-darkslategray-200 font-roboto-slab mq800:gap-[16px] mq800:pb-[118px] mq800:box-border mq1125:h-auto mq1125:pb-[181px] mq1125:box-border">
          <header className="self-stretch h-11 flex flex-row items-start justify-between gap-[20px] shrink-0 text-left text-sm text-darkslategray-200 font-text-md-medium">
            {/* <div className="w-[234px] shadow-[0px_0px_22px_rgba(151,_151,_151,_0.15)] rounded-3xs bg-white flex flex-row items-start justify-start py-[11.5px] px-5 box-border"> */}
              {/* <div className="h-11 w-[234px] relative shadow-[0px_0px_22px_rgba(151,_151,_151,_0.15)] rounded-3xs bg-white hidden" /> */}
              <input className="[text-decoration:none] relative capitalize text-[inherit] inline-block min-w-[52px] whitespace-nowrap z-[1] border-none h-11 w-[234px] relative w-[234px] shadow-[0px_0px_22px_rgba(151,_151,_151,_0.15)] rounded-3xs bg-white flex flex-row items-start justify-start py-[11.5px] px-5 box-border shadow-[0px_0px_22px_rgba(151,_151,_151,_0.15)] rounded-3xs bg-white" placeholder="Search" />
              {/* </a> */}
            {/* </div> */}
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-smi text-black">
              <div className="h-11 w-11 relative min-h-[44px] shadow-[0px_0px_22px_rgba(151,_151,_151,_0.15)] rounded-3xs bg-white flex items-center justify-center">
               <CiBellOn size={27} />
              </div>
              <div className="shadow-[0px_0px_22px_rgba(151,_151,_151,_0.15)] rounded-3xs bg-white flex flex-row items-start justify-start py-[7px] px-1.5 gap-[10px]">
                <div className="h-11 w-40 relative shadow-[0px_0px_22px_rgba(151,_151,_151,_0.15)] rounded-3xs bg-white hidden" />
                <img
                  className="h-[30px] w-[30px] relative rounded-3xs object-contain z-[1]"
                  alt=""
                  src="/dashboard/profile-image@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="relative capitalize font-medium inline-block min-w-[78px] z-[1]">
                    Christopher
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <ArrowDownward />
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-start justify-start pt-0 pb-2 pr-5 pl-0 gap-[6px]">
            <div className="flex flex-row items-start justify-start gap-[17px]">
              <a className="[text-decoration:none] relative capitalize font-semibold text-[inherit] mq450:text-3xl">
                hello john
              </a>
              <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                <img
                  className="relative w-7 h-7"
                  loading="lazy"
                  alt=""
                  src="/dashboard/-emoji-waving-hand.svg"
                />
              </div>
            </div>
            <div className="relative text-sm text-black capitalize font-text-md-medium whitespace-nowrap">
              let’s learn something new today
            </div>
          </div>
          {/* <ProgressContainer /> */}
          {/* <PerformanceContainer
           /> */}
           <div className="grid grid-flow-col gap-10">
            <div className="shadow-lg shadow-black/10">
           <ProgressBarChart />  
            </div>
           <div className="border-2 border-black shadow-lg border-b-large ">
           <BarLineChart />
           </div>
            </div>
          <footer className="w-[875px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[10px] max-w-full text-left text-5xl text-darkslategray-200 font-text-md-medium">
            <h1 className="relative m-0 font-semibold capitalize text-inherit font-inherit mq450:text-lgi">
              my courses
            </h1>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-mini text-darkslategray-300 mq800:flex-wrap">
              <div className="w-[218px] flex flex-col items-start justify-start gap-[17px]">
                <div className="relative capitalize font-medium inline-block min-w-[106px]">
                  course name
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-darkslategray-200">
                  <div className="flex flex-col items-start justify-start gap-[16px]">
                    <img
                      className="relative w-10 h-10"
                      loading="lazy"
                      alt=""
                      src="/dashboard/group-41.svg"
                    />
                    <img
                      className="relative w-10 h-10"
                      loading="lazy"
                      alt=""
                      src="/dashboard/group-40.svg"
                    />
                    <img
                      className="relative w-10 h-10"
                      loading="lazy"
                      alt=""
                      src="/dashboard/group-39.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start flex-1 px-0 pt-px pb-0">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[22px] capitalize font-medium inline-block min-w-[98px] whitespace-nowrap">
                          UI/UX Design
                        </div>
                        <div className="relative text-xs leading-[16px] capitalize text-darkgray inline-block min-w-[62px] z-[1]">
                          10 lessons
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[22px] capitalize font-medium inline-block min-w-[91px] whitespace-nowrap">
                          web design
                        </div>
                        <div className="relative text-xs leading-[16px] capitalize text-darkgray inline-block min-w-[62px] z-[1]">
                          10 lessons
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[22px] capitalize font-medium whitespace-nowrap">
                          freelancing in design
                        </div>
                        <div className="relative text-xs leading-[16px] capitalize text-darkgray inline-block min-w-[62px] z-[1]">
                          10 lessons
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[79px] max-w-full mq450:gap-[39px]">
                <div className="flex flex-col items-start justify-start gap-[27px]">
                  <div className="relative capitalize font-medium inline-block min-w-[76px]">
                    start date
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[34px] text-darkslategray-200">
                    <div className="relative leading-[22px] capitalize inline-block min-w-[72px]">
                      08-08-22
                    </div>
                    <div className="relative leading-[22px] capitalize inline-block min-w-[63px]">
                      15-01-23
                    </div>
                    <div className="relative leading-[22px] capitalize inline-block min-w-[70px]">
                      24-07-23
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[27px] text-darkslategray-200">
                  <div className="relative capitalize font-medium text-darkslategray-300 inline-block min-w-[50px]">
                    rating
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px]">
                    <div className="relative leading-[22px] capitalize inline-block min-w-[23px]">
                      4.5
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[34px]">
                    <div className="relative leading-[22px] capitalize inline-block min-w-[23px]">
                      4.4
                    </div>
                    <div className="relative leading-[22px] capitalize inline-block min-w-[23px]">
                      5.0
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[26px]">
                  <div className="relative capitalize font-medium inline-block min-w-[39px]">
                    level
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[34px] text-darkslategray-200">
                    <div className="relative leading-[22px] capitalize inline-block min-w-[47px]">
                      expert
                    </div>
                    <div className="relative leading-[22px] capitalize inline-block min-w-[47px]">
                      expert
                    </div>
                    <div className="relative leading-[22px] capitalize inline-block min-w-[47px]">
                      expert
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;



