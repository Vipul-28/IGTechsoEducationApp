import PropTypes from "prop-types";

const GroupComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-2xl bg-lavender-700 flex flex-col items-start justify-start pt-10 px-[17px] pb-[16.7px] relative gap-[17.4px] z-[3] text-left text-sm text-dimgray font-text-md-medium ${className}`}
    >
      <div className="w-[194px] h-[173.1px] relative rounded-2xl bg-lavender-700 hidden z-[0]" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-px">
        <div className="relative capitalize font-medium z-[1]">
          <p className="m-0">download our mobile</p>
          <p className="m-0">{`app from app store &`}</p>
          <p className="m-0">play store</p>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-lg border-darkviolet border-[1px] border-solid flex flex-row items-start justify-start py-[11px] px-[37px] z-[1] text-center text-mini text-darkviolet font-montserrat">
        <div className="h-9 w-40 relative [filter:drop-shadow(0px_2px_4px_rgba(0,_0,_0,_0.25))] rounded-lg border-darkviolet border-[1px] border-solid box-border hidden" />
        <div className="flex-1 relative leading-[11.6px] font-semibold inline-block min-w-[85px] z-[1]">
          download
        </div>
      </div>
      <img
        className="w-[140.5px] h-[105.2px] absolute !m-[0] top-[-84.7px] left-[0px] object-cover z-[4]"
        loading="lazy"
        alt=""
        src="/dashboard_two/layer-2@2x.png"
      />
    </div>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent4;
