import React from "react";
import classes from "./header.module.sass";

// import CodeIcon from "@mui/icons-material/Code";

const Navigation = () => {
  return (
    <div className={classes.header}>
      <div className={classes.menuWrapper}>
        <span className={classes.menuToggle}>
          <p>Menu</p>
          <span></span>
        </span>
      </div>
    </div>
  );
};

export default Navigation;
