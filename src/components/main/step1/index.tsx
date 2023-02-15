import { useRef } from "react";
import SocialIcons from "../socialIcons/SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import classes from "./stepOne.module.sass";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <section id="stepOne" ref={sectionRef} className={classes.stepOne}>
      <FontAwesomeIcon icon={faCode} />
      <div className={classes.stepOneTextWrapper}>
        <div className={classes.textWrapper}>
          <span>Welcome to my portfolio</span>
          <h3>One more step to perfection</h3>
          <div className={classes.btnWrapper}>
            <button onClick={() => navigate("/projects")}>My Projects</button>
            <button onClick={() => navigate("/about")}>About Me</button>
          </div>
        </div>

        <SocialIcons />
      </div>
    </section>
  );
};

export default StepOne;
