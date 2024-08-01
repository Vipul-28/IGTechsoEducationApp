import Component2 from "./Component2";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[40.3px] text-left text-xl-7 text-darkslategray-200 font-roboto-slab gap-5 ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[53px]">
        <div className="relative flex flex-row items-start justify-start">
          <img
            className="h-[30.4px] w-[38.4px] absolute !m-[0] top-[0px] right-[-11.9px] z-[1]"
            loading="lazy"
            alt=""
            src="/dashboard_two/group-12.svg"
          />
          <a className="[text-decoration:none] relative lowercase font-semibold text-[inherit] z-[2] mq450:text-mid">
            <p className="m-0">smart</p>
            <p className="m-0">academy</p>
          </a>
        </div>
      </div>
      <div className="self-stretch h-0.5 relative bg-crimson-100 z-[1]" />
      <div className="flex flex-row items-start self-stretch justify-end text-base text-gray1-300 font-text-md-medium">
        <Component2 />
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
