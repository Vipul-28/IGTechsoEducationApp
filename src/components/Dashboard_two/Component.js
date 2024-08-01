import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  return (
    <div
      className={`h-[15px] flex flex-row items-start justify-start py-0 px-0 box-border z-[1] text-left text-xs text-darkslategray-200 font-fuzzy-bubbles ${className}`}
    >
      <b className="relative capitalize inline-block min-w-[40px] shrink-0">
        18,201
      </b>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
