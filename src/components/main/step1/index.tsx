import { useRef, useEffect } from "react";
import SocialIcons from "../socialIcons/SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./stepOne.module.sass";
import { useNavigate } from "react-router-dom";

interface Props {
  activePage: boolean;
}

const StepOne = ({ activePage }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (activePage)
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, [activePage]);

  useEffect(() => {}, []);

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
        <div className={classes.scrollDownIcon}>
          <FontAwesomeIcon icon={faChevronDown} />
          <a href="#stepTwo">scroll down</a>
        </div>
        <SocialIcons />
      </div>
    </section>
  );
};

export default StepOne;
