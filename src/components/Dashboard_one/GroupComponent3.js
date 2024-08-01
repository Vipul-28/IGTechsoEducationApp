import React from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className,
  group28,
  courseInProgress,
  toDoContainer,
  propBackgroundColor,
}) => {
  return (
    <div
      className={`flex-1 rounded-sm bg-mistyrose flex flex-col items-start justify-start pt-2.5 px-4 pb-[30px] box-border gap-[4.5px] min-w-[212px] max-w-[230px] text-left text-xs text-midnightblue font-text-md-medium ${className}`}
      style={{ backgroundColor: propBackgroundColor }}
    >
      <div className="w-[230px] h-[150px] relative rounded-sm bg-mistyrose hidden" />
      <div className="flex flex-col items-start justify-start gap-[27.5px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-8 w-8 relative z-[1]"
            loading="lazy"
            alt=""
            src={group28}
          />
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <div className="relative leading-[18.4px] capitalize font-medium inline-block min-w-[115px] z-[1]">
              {courseInProgress}
            </div>
          </div>
        </div>
        <div className="relative text-9xl capitalize font-medium inline-block min-w-[37px] z-[1] mq450:text-3xl">
          {toDoContainer}
        </div>
      </div>
      <div className="self-stretch h-[3px] relative bg-gradient-to-r from-[#8708c2] via-transparent to-[#fff] z-[1]" />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  group28: PropTypes.string,
  courseInProgress: PropTypes.string,
  toDoContainer: PropTypes.string,
  propBackgroundColor: PropTypes.any,
};

export default GroupComponent;
