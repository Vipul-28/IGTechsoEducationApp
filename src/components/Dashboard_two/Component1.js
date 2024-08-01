import PropTypes from "prop-types";

const Component1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[88.3px] left-[16px] flex flex-row items-start justify-start py-0 px-0 z-[2] text-left text-11xl text-darkslategray-200 font-hanuman ${className}`}
    >
      <div className="relative capitalize inline-block min-w-[88px] shrink-0 mq450:text-lg mq800:text-5xl">
        56,556
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
