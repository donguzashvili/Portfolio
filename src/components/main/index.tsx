import classes from "./main.module.sass";

import StepOne from "./step1";
import { StepTwo } from "./step2";
import StepThree from "./step3";
import StepFour from "./step4";

const MainPage = () => {
  return (
    <div className={classes.main}>
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
};

export default MainPage;
