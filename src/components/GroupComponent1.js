import React from "react";

const GroupComponent2 = ({
  group87,
  k,
  onlineCourses,
  propFlex,
  propMinWidth,
}) => {
  const groupDivStyle = {
    flex: propFlex,
    minWidth: propMinWidth,
  };

  return (
    <div className={`group-component`} style={groupDivStyle}>
      <img className="group-image" alt="" src={group87} />
      <div className="group-content">
        <p className="group-title">{k}</p>
        <p className="group-description">{onlineCourses}</p>
      </div>
    </div>
  );
};

export default GroupComponent2;
