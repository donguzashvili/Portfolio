import { useState, useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import classes from "./stepTwo.module.sass";

interface dataType {
  projects: number;
  experience: number;
  technologies: number;
  languages: number;
}
const data: dataType = {
  projects: 10,
  experience: 3,
  technologies: 10,
  languages: 2,
};
export const StepTwo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inViewPort = useInViewport(ref);

  const [numbers, setNumbers] = useState<dataType>({
    projects: 0,
    experience: 0,
    technologies: 0,
    languages: 0,
  });

  const everythingMatches = () => {
    const dataValues = Object.values(data);
    return Object.values(numbers).every((el, indx) => el === dataValues[indx]);
  };

  const propertyMatches = (
    prevNumber: number,
    property: "projects" | "experience" | "technologies" | "languages"
  ) => {
    if (prevNumber < data[property]) return prevNumber + 1;
    return prevNumber;
  };

  const contentVisible = () => {
    if (ref.current && ref.current.classList.contains(classes.showStepTwo))
      return;
    else ref.current?.classList.add(classes.showStepTwo);
  };

  useEffect(() => {
    // already count up || numbers are not visible yet
    if (everythingMatches() || !inViewPort.inViewport) return;

    contentVisible();

    const numberInterval = setTimeout(() => {
      setNumbers((prevNumbers) => {
        return {
          projects: propertyMatches(prevNumbers.projects, "projects"),
          experience: propertyMatches(prevNumbers.experience, "experience"),
          technologies: propertyMatches(
            prevNumbers.technologies,
            "technologies"
          ),
          languages: propertyMatches(prevNumbers.languages, "languages"),
        };
      });
    }, 350);

    return () => {
      clearTimeout(numberInterval);
    };
  }, [numbers, inViewPort]);

  return (
    <section id="stepTwo" className={classes.stepTwo}>
      <div className={classes.wrapper} ref={ref}>
        <div className={classes.head}>
          <p>Hello There</p>
          <h3>
            My name is <span>Shota</span>
          </h3>
          <h5>I am software developer</h5>
        </div>
        <div className={classes.body}>
          <p>
            I am highly motivated hardworker person, who loves coding and and
            solving issues, always find satisfying when learning new
            technologies and tring them out, worked with AGILE/SCRUM and
            Waterfall my goal is to be senior MERN stack, also have worked with
            3D technologies such as THREE.js and Blender
          </p>
        </div>
        <div className={classes.footer}>
          {Object.keys(data).map((el) => (
            <div>
              {/* @ts-ignore */}
              <p>{el === "technologies" ? `+${numbers[el]}` : numbers[el]}</p>
              <h5>{el}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
