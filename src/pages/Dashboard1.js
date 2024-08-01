import FrameComponent6 from "../components/Dashboard_two/FrameComponent6";
import GroupComponent4 from "../components/Dashboard_two/GroupComponent4";
import Component1 from "../components/Dashboard_two/Component1";
import Component from "../components/Dashboard_two/Component";
import { FaPlus} from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const Dashboard1 = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start gap-[48.8px] leading-[normal] tracking-[normal] text-left text-11xl text-darkslategray-200 font-hanuman gap-6 mq1325:flex-wrap">
      <div className="w-[279px] shadow-[0px_4px_4px_rgba(191,_8,_194,_0.24)] bg-white flex flex-col items-end justify-start pt-[46.5px] px-0 pb-[28.1px] box-border gap-[141.8px] gap-[71px] mq450:pt-5 mq450:box-border mq1125:pt-[30px] mq1125:pb-5 mq1125:box-border">
        <div className="self-stretch h-[1000px] relative shadow-[0px_4px_4px_rgba(191,_8,_194,_0.24)] bg-white hidden" />
        <FrameComponent6 />
        <div className="w-[264px] flex flex-row items-start justify-end py-0 px-[35px] box-border">
          <GroupComponent4 />
        </div>
      </div>
      <div className="h-11 w-[87px] relative hidden">
        <div className="absolute top-[0%] left-[0%] capitalize inline-block min-w-[88px] w-full h-full mq450:text-lg mq800:text-5xl">
          56,556
        </div>
      </div>
      <main className="w-[1062.2px] flex flex-col items-start justify-start pt-[49.5px] px-0 pb-0 box-border max-w-full mq450:pt-[21px] mq450:box-border mq1125:pt-8 mq1125:box-border">
        <section className="self-stretch flex flex-col items-start justify-start gap-[43.2px] max-w-full text-left text-lg text-darkslategray-200 font-fuzzy-bubbles gap-[22px]">
          <header className="self-stretch flex flex-row items-start justify-between gap-5 text-left text-[32px] text-darkslategray-200 font-roboto-slab">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <a className="[text-decoration:none] relative capitalize font-semibold text-[inherit] whitespace-nowrap">
                dashboard
              </a>
            </div>
            <div className="w-[302px] flex flex-row items-start justify-start gap-5 text-mini font-text-md-medium">
              <div className="flex-1 rounded-3xs bg-whitesmoke-100 flex flex-row items-start justify-start py-3 px-4 gap-[11px]">
                <div className="h-12 w-[234px] relative rounded-3xs hidden " />
                <div class="relative bg-whitesmoke mt-[-13px]">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border-none rounded-2xl bg-[#F0F0F0] " placeholder="Search"
         required />
    </div>

              </div>
              <img
                className="h-12 w-12 relative min-h-[48px]"
                alt=""
                src="/dashboard_two/group-52.svg"
              />
            </div>
          </header>
          <div className="flex flex-col items-end self-stretch justify-start max-w-full gap-5 gap-10">
           
           
           
           
            <div className="self-stretch flex flex-row items-start justify-center gap-[25px] mq1125:flex-wrap">
              <div className="flex-[0.8808] rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-4 px-[17px] pb-5 gap-[4.7px] min-w-[196px] mq450:flex-1">
                <div className="w-[302px] h-[182px] relative rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border hidden" />
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[28.3px]">
                  <div className="flex flex-row items-start justify-start gap-[11.5px]">
                    <img
                      className="h-6 w-6 relative top-2    z-[1]"
                      loading="lazy"
                      alt=""
                      src="/dashboard_two/group-60.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    
                      <FaArrowTrendDown />

                    </div>
                    <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                      <b className="relative capitalize inline-block min-w-[40px] z-[1]">
                        1.4%
                      </b>
                    </div>
                  </div>
                  <div className="relative text-11xl capitalize font-hanuman inline-block min-w-[88px] z-[1] mq450:text-lg mq800:text-5xl">
                    12,500
                  </div>
                </div>
                <div className="relative text-base capitalize font-hanuman text-dimgray inline-block min-w-[114px] z-[1]">
                  total teachers
                </div>
              </div>
                 <div className="flex-[0.8874] rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-4 px-4 pb-5 gap-[28.3px] min-w-[196px] mq450:flex-1">
                <div className="w-[302px] h-[182px] relative rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border hidden" />
                <div className="w-[161px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-[11.5px]">
                  <div className="h-11 w-11 relative z-[1]">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs bg-lavender-900 w-full h-full" />
                    <img
                      className="absolute top-[10px] left-[10px] w-6 h-6 overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/dashboard_two/group-59.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <FaArrowTrendUp />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                    <b className="relative capitalize inline-block min-w-[50px] z-[1]">
                      56,556
                    </b>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[4.7px] text-11xl font-hanuman">
                  <h1 className="m-0 relative text-inherit capitalize font-normal font-[inherit] z-[1] mq450:text-lg mq800:text-5xl">
                    $1.5 million
                  </h1>
                  <div className="relative text-base capitalize text-dimgray inline-block min-w-[85px] z-[1]">
                    total students
                  </div>
                </div>
              </div>
              <div className="flex-[0.8874] rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-4 px-4 pb-5 gap-[28.3px] min-w-[196px] mq450:flex-1">
                <div className="w-[302px] h-[182px] relative rounded-xl bg-white border-gainsboro-200 border-[1px] border-solid box-border hidden" />
                <div className="w-[161px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-[11.5px]">
                  <div className="h-11 w-11 relative z-[1]">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs bg-lavender-900 w-full h-full" />
                    <img
                      className="absolute top-[10px] left-[10px] w-6 h-6 overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/dashboard_two/dollarsymbol-1-traced.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <FaArrowTrendUp />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                    <b className="relative capitalize inline-block min-w-[50px] z-[1]">
                      12.3%
                    </b>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[4.7px] text-11xl font-hanuman">
                  <h1 className="m-0 relative text-inherit capitalize font-normal font-[inherit] z-[1] mq450:text-lg mq800:text-5xl">
                    $1.5 million
                  </h1>
                  <div className="relative text-base capitalize text-dimgray inline-block min-w-[85px] z-[1]">
                    total sales
                  </div>
                </div>
              </div>
              <div className="h-[180px] rounded-xl bg-ghostwhite-300 flex flex-row items-start justify-start py-3 pl-4 pr-[3px] box-border gap-3 text-mini text-darkviolet font-text-md-medium">
                <div className="h-[180px] w-[87.2px] relative rounded-xl bg-ghostwhite-300 hidden" />
                <div className="h-[22px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <div className="relative leading-[22px] capitalize font-semibold inline-block min-w-[32px] z-[1]">
                    add
                  </div>
                </div>
                <FaPlus className="mt-1" />
              </div>
            </div>

            
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[3px] pr-0 box-border gap-[21.5px] max-w-full font-text-md-medium mq1125:flex-wrap">
            
              <div className="h-[557.6px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[307.6px] box-border gap-[38.2px] min-w-[406px] shrink-0 max-w-full mq450:pb-[130px] mq450:box-border mq450:min-w-full mq800:h-auto gap-[19px] mq1125:pb-[200px] mq1125:box-border">
              
              
                <div className="self-stretch rounded-2xl bg-ghostwhite-100 flex flex-row items-start justify-between pt-[18.2px] pb-[15.6px] pl-5 pr-6 box-border shrink-0 max-w-full gap-5 mq800:flex-wrap bg-[#FCF6FF]">
                  <div className="h-[250px] w-[625px] relative rounded-2xl bg-ghostwhite-100 hidden max-w-full" />
                  <div className="w-[187px] flex flex-col items-start justify-start gap-[18.1px] min-w-[187px] mq800:flex-1">
                    <h3 className="m-0 relative text-inherit leading-[22px] capitalize font-semibold font-[inherit] z-[1]">
                      popular courses
                    </h3>
                    <div className="self-stretch flex flex-row items-start justify-start gap-2.5 text-sm text-black">
                      <div className="flex flex-col items-start justify-start gap-3.5">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/dashboard_two/fire-1-1-traced.svg"
                        />
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/dashboard_two/fire-1-1-traced.svg"
                        />
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/dashboard_two/fire-1-1-traced.svg"
                        />
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/dashboard_two/fire-1-1-traced.svg"
                        />
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/dashboard_two/fire-1-1-traced.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                          <div className="relative leading-[20px] capitalize whitespace-nowrap z-[1]">
                            android development
                          </div>
                          <div className="relative leading-[20px] capitalize inline-block min-w-[86px] z-[1]">
                            web design
                          </div>
                          <div className="relative leading-[20px] capitalize inline-block min-w-[92px] z-[1]">
                            uI/UX design
                          </div>
                          <div className="relative leading-[20px] capitalize inline-block min-w-[128px] z-[1]">
                            machine learning
                          </div>
                          <div className="relative leading-[20px] capitalize inline-block min-w-[96px] z-[1]">
                            data science
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[254.1px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[254.1px] text-xs font-fuzzy-bubbles mq800:flex-1">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[23.7px]">
                      <img
                        className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/dashboard_two/option-1-traced.svg"
                      />
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-0.5">
                        <div className="flex flex-row items-start justify-start flex-1 gap-3">
                          <div className="flex flex-col items-start justify-start gap-[23px]">
                            <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                              <Component />
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                              <b className="relative capitalize inline-block min-w-[38px] z-[1]">
                                14,765
                              </b>
                            </div>
                            <b className="relative capitalize inline-block min-w-[40px] z-[1]">
                              10,567
                            </b>
                            <div className="flex flex-row items-start justify-start py-0 pl-1 pr-0">
                              <b className="relative capitalize inline-block min-w-[36px] z-[1]">
                                8,067
                              </b>
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 pl-1.5 pr-0">
                              <b className="relative capitalize inline-block min-w-[34px] z-[1]">
                                7,986
                              </b>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                            <div className="flex flex-col items-start self-stretch justify-start gap-8">
                              <div className="self-stretch h-1.5 relative rounded-3xs [background:linear-gradient(90deg,_#f93737_93.69%,_#fff_93.71%)] z-[1]" />
                              <div className="self-stretch h-1.5 relative rounded-3xs [background:linear-gradient(90deg,_#609cd3_87.55%,_#fff_87.72%)] z-[1]" />
                              <div className="self-stretch h-1.5 relative rounded-3xs [background:linear-gradient(90deg,_#f08f3c_73.08%,_#fff_73.44%)] z-[1]" />
                              <div className="self-stretch h-1.5 relative rounded-3xs [background:linear-gradient(90deg,_#220f60_53.93%,_#fff_53.97%)] z-[1]" />
                              <div className="self-stretch h-1.5 relative rounded-3xs [background:linear-gradient(90deg,_#d63ed9_49.42%,_#fff_49.46%)] z-[1]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
               
                <div className="self-stretch rounded-2xl bg-ghostwhite-100 flex flex-row items-start justify-between pt-[20.4px] pb-[25px] pl-5 pr-6 box-border shrink-0 max-w-full gap-5 text-xs text-dimgray mq800:flex-wrap bg-[#FCF6FF]">
                  <div className="h-[269.4px] w-[625px] relative rounded-2xl bg-ghostwhite-100 hidden max-w-full" />
                  <div className="flex flex-col items-start justify-start gap-3.5 text-sm text-darkslategray-200">
                    <h3 className="m-0 relative text-lg leading-[22px] capitalize font-semibold font-[inherit] z-[1]">
                      last student activity
                    </h3>
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1.5 text-xs text-dimgray">
                      <div className="relative capitalize inline-block min-w-[87px] z-[1]">
                        student name
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-3.5">
                      <div className="flex flex-row items-start justify-start gap-[9px]">
                        <img
                          className="h-10 w-10 relative rounded-[50%] object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/dashboard_two/ellipse-12@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                          <div className="h-[21px] relative capitalize font-medium inline-block min-w-[88px] z-[1]">
                            Devon Miles
                          </div>
                        </div>
                      </div>
                      <div className="h-10 flex flex-row items-start justify-start py-0.5 px-0 box-border gap-3">
                        <img
                          className="h-10 w-10 relative rounded-[50%]"
                          loading="lazy"
                          alt=""
                          src="/dashboard_two/calendar-month-fill1-wght400-grad0-opsz48-2-11.svg"
                        />
                        <div className="relative capitalize font-medium inline-block min-w-[128px]">
                          Thomas Magnum
                        </div>
                      </div>
                    </div>
                    <div className="h-10 flex flex-row items-start justify-start py-0.5 px-0 box-border gap-2.5">
                      <img
                        className="h-10 w-10 relative rounded-[50%]"
                        loading="lazy"
                        alt=""
                        src="/dashboard_two/calendar-month-fill1-wght400-grad0-opsz48-2-12.svg"
                      />
                      <div className="relative capitalize font-medium inline-block min-w-[124px]">
                        Angus MacGyver
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[38px] pb-0 pl-0 pr-7">
                    <div className="flex flex-col items-start justify-start gap-[29.5px]">
                      <div className="relative capitalize inline-block min-w-[45px] z-[1]">
                        subject
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[33px] text-sm text-darkslategray-200">
                        <div className="relative capitalize font-medium inline-block min-w-[95px] z-[1]">
                          uI/UX Design
                        </div>
                        <div className="relative capitalize font-medium inline-block min-w-[97px] z-[1]">
                          data science
                        </div>
                        <div className="relative capitalize font-medium inline-block min-w-[88px] z-[1]">
                          web design
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[115.3px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                      <div className="flex flex-row items-start self-stretch justify-end">
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/dashboard_two/option-1-traced-1.svg"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[12.5px]">
                        <div className="relative capitalize inline-block min-w-[29px] z-[1]">
                          date
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[33px] text-sm text-darkslategray-200">
                        <div className="relative capitalize inline-block min-w-[88px] z-[1]">
                          05 nov 2023
                        </div>
                        <div className="relative capitalize inline-block min-w-[84px] z-[1]">
                          20 oct 2023
                        </div>
                        <div className="relative capitalize inline-block min-w-[83px] z-[1]">
                          01 sep 2023
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="w-[412.2px] rounded-2xl bg-ghostwhite-100 flex flex-col items-start justify-start pt-[18px] px-5 pb-[52.2px] box-border gap-[62.4px] min-w-[412.2px] shrink-0 max-w-full gap-[31px] mq450:min-w-full mq800:pt-5 mq800:pb-[34px] mq800:box-border mq1125:flex-1 bg-[#FCF6FF]">
                <div className="w-[412.2px] h-[557.5px] relative rounded-2xl bg-ghostwhite-100 hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-start gap-[23.1px] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <h3 className="m-0 relative text-inherit leading-[22px] capitalize font-semibold font-[inherit] inline-block min-w-[73px] z-[1]">
                      reports
                    </h3>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[3.9px] min-w-[179px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[60.9px] px-0 pb-0">
                      <div className="self-stretch h-[180px] relative">
                        <div className="absolute top-[0px] left-[0px] w-full h-full">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-full h-full z-[1]" />
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkviolet w-full h-full z-[2]" />
                        </div>
                        <div className="absolute top-[25px] left-[25px] flex flex-col items-start justify-start py-[46px] px-[37px] gap-px">
                          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 z-[3]" />
                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-orange z-[4]" />
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-1.5">
                            <div className="relative leading-[22px] capitalize font-semibold inline-block min-w-[46.9px] z-[4]">
                              6,780
                            </div>
                          </div>
                          <div className="relative text-3xs capitalize font-semibold inline-block min-w-[56px] z-[5]">
                            from 7,300
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[92px] rounded-lg border-darkviolet border-[1px] border-solid box-border flex flex-row items-start justify-start py-[5px] pl-[13px] pr-3 gap-[5px] z-[1] text-xs text-darkviolet">
                      <div className="h-8 w-[92px] relative rounded-lg border-darkviolet border-[1px] border-solid box-border hidden" />
                      <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[44px] z-[1]">
                        weekly
                      </a>
                      <div className="flex flex-col items-start justify-start px-0 pt-px pb-0">
                        <img
                          className="w-4 h-4 relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/dashboard_two/arrow.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-8 z-[1] gap-4">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[17px] mq450:flex-wrap">
                    <div className="relative w-1 h-10 rounded-xl bg-darkviolet mq450:w-full mq450:h-1" />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[172px]">
                      <div className="relative leading-[22px] capitalize font-semibold inline-block min-w-[40px]">
                        1,120
                      </div>
                      <div className="relative text-xs capitalize text-dimgray inline-block min-w-[100px]">
                        dummy content
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0 text-xs text-mediumorchid">
                      <div className="relative capitalize font-medium inline-block min-w-[28px] whitespace-nowrap">
                        +120
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start px-0 pt-2 pb-0">
                      <img
                        className="relative object-contain w-6 h-6 overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/dashboard_two/arrow-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16.7px] mq450:flex-wrap">
                    <div className="relative w-1 h-10 rounded-xl bg-orange mq450:w-full mq450:h-1" />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[22px] capitalize font-semibold inline-block min-w-[45px]">
                        1,245
                      </div>
                      <div className="relative text-xs capitalize text-dimgray inline-block min-w-[100px]">
                        dummy content
                      </div>
                    </div>
                    <div className="h-[18px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-xs text-mediumorchid">
                      <div className="relative capitalize font-medium inline-block min-w-[32px] whitespace-nowrap">
                        +245
                      </div>
                    </div>
                    <div className="box-border flex flex-col items-start justify-start h-6 px-0 pt-2 pb-0">
                      <img
                        className="relative object-contain w-6 h-6 overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/dashboard_two/arrow-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[17px] mq450:flex-wrap">
                    <div className="relative w-1 h-10 rounded-xl bg-gainsboro-300 mq450:w-full mq450:h-1" />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[22px] capitalize font-semibold inline-block min-w-[33px]">
                        320
                      </div>
                      <div className="relative text-xs capitalize text-dimgray inline-block min-w-[100px]">
                        dummy content
                      </div>
                    </div>
                    <div className="h-[18px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-xs text-mediumorchid">
                      <div className="relative capitalize font-medium inline-block min-w-[24px] whitespace-nowrap">
                        +20
                      </div>
                    </div>
                    <div className="box-border flex flex-col items-start justify-start h-6 px-0 pt-2 pb-0">
                      <img
                        className="relative object-contain w-6 h-6 overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/dashboard_two/arrow-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>


              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard1;
