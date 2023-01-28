import { useRef, useEffect } from "react";
import SocialIcons from "../socialIcons/SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./stepOne.module.sass";

interface Props {
  nextPage(): void;
  activePage: boolean;
}

const StepOne = ({ nextPage, activePage }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
            <button>My Projects</button>
            <button>About Me</button>
          </div>
        </div>
        <div className={classes.scrollDownIcon}>
          <FontAwesomeIcon icon={faChevronDown} />
          <p onClick={nextPage}>scroll down</p>
        </div>
        <SocialIcons />
      </div>
    </section>
  );
};

export default StepOne;
