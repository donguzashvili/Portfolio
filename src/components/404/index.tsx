import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./style.module.sass";

interface props {
  children?: ReactNode;
}

const ErrorPage = ({ children }: props) => {
  const navigate = useNavigate();

  return (
    <div className={classes.error}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h2>Something is not right...</h2>
        </div>
        <div>{children}</div>
        <div className={classes.btnWrapper}>
          <button onClick={() => navigate("/")}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
