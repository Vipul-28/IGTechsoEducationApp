import PropTypes from "prop-types";

const Component2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[249px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[22px] z-[1] text-left text-base text-gray1-300 font-text-md-medium ${className}`}
    >
      <div className="flex flex-row items-start self-stretch justify-start gap-3 text-darkviolet">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/dashboard_two/bar-chart-4-bars-fill0-wght400-grad0-opsz48-1.svg"
        />
        <div className="relative capitalize font-medium inline-block min-w-[92px]">
          dashboard
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-3.5">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/dashboard_two/calendar-month-fill1-wght400-grad0-opsz48-2-1.svg"
        />
        <div className="relative capitalize inline-block min-w-[75px]">
          schedule
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-3.5">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/dashboard_two/book-1-traced.svg"
        />
        <div className="relative capitalize inline-block min-w-[66px]">
          courses
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-3.5">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/dashboard_two/presentation-1-traced.svg"
        />
        <div className="relative capitalize inline-block min-w-[69px]">
          sessions
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-3.5">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/dashboard_two/piechart-1-traced.svg"
        />
        <div className="relative capitalize inline-block min-w-[61px]">
          reports
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-3.5">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/dashboard_two/teacher-1-traced.svg"
        />
        <div className="relative capitalize inline-block min-w-[74px]">
          teachers
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-3.5">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/dashboard_two/graduatehat-1-traced.svg"
        />
        <div className="relative capitalize inline-block min-w-[71px]">
          students
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-3.5">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/dashboard_two/group-1-traced.svg"
        />
        <div className="relative capitalize inline-block min-w-[55px]">
          teams
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-3.5">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/dashboard_two/funds-1-traced.svg"
        />
        <div className="relative capitalize inline-block min-w-[43px]">
          sales
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-3.5">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/dashboard_two/setting-1-traced.svg"
        />
        <div className="relative capitalize inline-block min-w-[56px]">
          setting
        </div>
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
};

export default Component2;
