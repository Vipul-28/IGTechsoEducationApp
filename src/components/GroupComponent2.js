import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent2 = ({
  className = "",
  group87,
  k,
  onlineCourses,
  propFlex,
  propMinWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={`flex-1 shadow-[0px_4px_10px_rgba(151,_151,_151,_0.2)] rounded-xl bg-white flex flex-row items-start justify-start py-6 px-4 box-border gap-[12px] min-w-[162px] text-left text-mini text-darkslategray-200 font-text-md-medium ${className}`}
      style={groupDivStyle}
    >
      <div className="h-[120px] w-[250px] relative shadow-[0px_4px_10px_rgba(151,_151,_151,_0.2)] rounded-xl bg-white hidden" />
      <img className="h-[72px] w-[72px] relative z-[1]" alt="" src={group87} />
      <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
        <div className="h-[46px] relative capitalize inline-block z-[1]">
          <p className="m-0 font-semibold">{k}</p>
          <p className="m-0">{onlineCourses}</p>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  group87: PropTypes.string,
  k: PropTypes.string,
  onlineCourses: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent2;
