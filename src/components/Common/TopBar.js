import React from "react";
import battery from "../../Assets/battery.jpg";

function TopBar() {
  return (
    <div style={{ height: "30px", width: "100%" }}>
      <img src={battery} alt="" style={{ height: "30px" }} />
    </div>
  );
}

export default TopBar;
